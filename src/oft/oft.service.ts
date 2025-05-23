import { Injectable } from '@nestjs/common';
import { CreateOftDto } from './dto/create-oft.dto';
import { ChainService } from '../chain/chain.service';
import { ConfigService } from '@nestjs/config';
import { ContractsService } from 'src/contracts/contracts.service';

const blockchainMap: Record<'ethereum' | 'mantle' | 'arbitrum', string> = {
  ethereum: 'sepolia',
  mantle: 'mantleSepoliaTestnet',
  arbitrum: 'arbitrumSepolia',
};

@Injectable()
export class OftService {
  constructor(
    private readonly chainService: ChainService,
    private readonly configService: ConfigService,
    private readonly contractService: ContractsService,
  ) {}

  async create(
    createOftDto: CreateOftDto,
  ): Promise<
    { txHash: string; blockchain: 'ethereum' | 'mantle' | 'arbitrum' }[]
  > {
    const { blockchain } = createOftDto;

    const alTokeOFTArgs = {
      name: createOftDto.name,
      symbol: createOftDto.symbol,
    };
    const txs: {
      txHash: Promise<string>;
      blockchain: 'ethereum' | 'mantle' | 'arbitrum';
    }[] = [];
    blockchain.forEach((specificBlockchain) => {
      const chain = blockchainMap[specificBlockchain] as
        | 'sepolia'
        | 'mantleSepoliaTestnet'
        | 'arbitrumSepolia';
      const endpointV2Address = this.endpointV2Address(chain);

      const initialSupply = this.initialSupply({
        chain: specificBlockchain,
        distributions: createOftDto.distributions,
      });

      const { deployerAddress } = this.configService.get('wallets') as {
        deployerAddress: string;
      };
      const txHash = this.chainService.deploy({
        chain,
        contractName: 'AlTokeOFT',
        deployArgs: [
          alTokeOFTArgs.name,
          alTokeOFTArgs.symbol,
          endpointV2Address,
          deployerAddress,
          deployerAddress,
          initialSupply,
        ],
      });
      txs.push({ txHash, blockchain: specificBlockchain });
    });
    const txsResolved = await Promise.all(txs.map(({ txHash }) => txHash));
    const resolvedTxs = txs.map((tx, i) => ({ ...tx, txHash: txsResolved[i] }));
    return resolvedTxs;
  }

  initialSupply({
    chain,
    distributions,
  }: {
    chain: string;
    distributions: {
      blockchain: string;
      address: string;
      amount: string;
    }[];
  }): bigint {
    const distributionsForChain = distributions.filter(
      (distribution) => distribution.blockchain === chain,
    );

    const totalSupply = distributionsForChain.reduce((acc, distribution) => {
      return acc + BigInt(distribution.amount);
    }, 0n);

    return totalSupply;
  }

  async getByTxHash({
    txHash,
    blockchain,
  }: {
    blockchain: 'ethereum' | 'mantle' | 'arbitrum';
    txHash: `0x${string}`;
  }) {
    const chain = blockchainMap[blockchain] as
      | 'sepolia'
      | 'mantleSepoliaTestnet'
      | 'arbitrumSepolia';
    const contractAddress: `0x${string}` | undefined =
      await this.chainService.getDeployAddress({
        txHash,
        chain,
      });

    return { contractAddress };
  }

  async transfer({
    oftAddress,
    merkleTreeAddress,
    blockchain,
    transferAmount,
  }: {
    oftAddress: `0x${string}`;
    merkleTreeAddress: `0x${string}`;
    blockchain: 'ethereum' | 'mantle' | 'arbitrum';
    transferAmount: bigint;
  }) {
    const chain = blockchainMap[blockchain] as
      | 'sepolia'
      | 'mantleSepoliaTestnet'
      | 'arbitrumSepolia';

    const publicClient = this.chainService.getPublicClient(chain);
    const { abi } = this.contractService.findOne('AlTokeOFT');
    const account = this.chainService.getAccount();
    const { request } = await publicClient.simulateContract({
      address: oftAddress,
      abi,
      functionName: 'transfer',
      args: [merkleTreeAddress, transferAmount],
      account,
    });

    const walletClient = this.chainService.getWalletClient(chain);
    const txHash = await walletClient.writeContract(request);


    return { txHash };
  }

  endpointV2Address(
    chain: 'mantleSepoliaTestnet' | 'arbitrumSepolia' | 'sepolia',
  ): `0x${string}` {
    const addressMap: Record<string, `0x${string}`> = {
      mantleSepoliaTestnet: '0x6EDCE65403992e310A62460808c4b910D972f10f',
      arbitrumSepolia: '0x6EDCE65403992e310A62460808c4b910D972f10f',
      sepolia: '0x6EDCE65403992e310A62460808c4b910D972f10f',
    };

    return addressMap[chain];
  }
}
