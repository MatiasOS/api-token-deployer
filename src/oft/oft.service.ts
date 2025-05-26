import { Injectable } from '@nestjs/common';
import { CreateOftDto } from './dto/create-oft.dto';
import { ChainService } from '../shared/chain/chain.service';
import { ConfigService } from '@nestjs/config';
import { ContractsService } from 'src/shared/contracts/contracts.service';
import { ConfigureOftDto } from './dto/configure-oft.dto';
import { pad } from 'viem';
import { SupportedChainId } from 'src/shared/types/chainId.types';

@Injectable()
export class OftService {
  constructor(
    private readonly chainService: ChainService,
    private readonly configService: ConfigService,
    private readonly contractService: ContractsService,
  ) {}

  async create(
    createOftDto: CreateOftDto,
  ): Promise<{ txHash: string; chainId: SupportedChainId }[]> {
    const { chainId } = createOftDto;

    const alTokeOFTArgs = {
      name: createOftDto.name,
      symbol: createOftDto.symbol,
    };
    const txs: {
      txHash: Promise<string>;
      chainId: SupportedChainId;
    }[] = [];

    const endpointV2Address = this.endpointV2Address(chainId);

    const initialSupply = this.initialSupply(createOftDto);

    const { deployerAddress } = this.configService.get('wallets') as {
      deployerAddress: string;
    };
    const txHash = this.chainService.deploy({
      chainId,
      contractName: 'AlTokeOFT',
      deployArgs: [
        alTokeOFTArgs.name,
        alTokeOFTArgs.symbol,
        endpointV2Address,
        deployerAddress,
        deployerAddress,
        '0x' + initialSupply.toString(16),
      ],
    });
    txs.push({ txHash, chainId });

    const txsResolved = await Promise.all(txs.map(({ txHash }) => txHash));
    const resolvedTxs = txs.map((tx, i) => ({ ...tx, txHash: txsResolved[i] }));
    return resolvedTxs;
  }

  initialSupply({
    distributions,
  }: {
    distributions: {
      address: `0x${string}`;
      amount: string;
    }[];
  }): bigint {
    const totalSupply: bigint = distributions.reduce(
      (acc, distribution) => acc + BigInt(distribution.amount),
      0n,
    );

    return totalSupply;
  }

  async getByTxHash({
    txHash,
    chainId,
  }: {
    chainId: SupportedChainId;
    txHash: `0x${string}`;
  }) {
    const contractAddress: `0x${string}` | undefined =
      await this.chainService.getDeployAddress({
        txHash,
        chainId,
      });

    return { contractAddress };
  }

  async transfer({
    oftAddress,
    merkleTreeAddress,
    chainId,
    transferAmount,
  }: {
    oftAddress: `0x${string}`;
    merkleTreeAddress: `0x${string}`;
    chainId: SupportedChainId;
    transferAmount: bigint;
  }) {
    const publicClient = this.chainService.getPublicClient(chainId);
    const { abi } = this.contractService.findOne('AlTokeOFT');
    const account = this.chainService.getAccount();
    const { request } = await publicClient.simulateContract({
      address: oftAddress,
      abi,
      functionName: 'transfer',
      args: [merkleTreeAddress, transferAmount],
      account,
    });

    const walletClient = this.chainService.getWalletClient(chainId);
    const txHash = await walletClient.writeContract(request);

    return { txHash };
  }

  endpointV2Address(chainId: SupportedChainId): `0x${string}` {
    const addressMap: Partial<Record<SupportedChainId, `0x${string}`>> = {
      5003: '0x6EDCE65403992e310A62460808c4b910D972f10f',
      421614: '0x6EDCE65403992e310A62460808c4b910D972f10f',
      11155111: '0x6EDCE65403992e310A62460808c4b910D972f10f',
    };

    return addressMap[chainId] as `0x${string}`;
  }

  endpointId(chainId: SupportedChainId): number {
    const endpointIdMap: Record<SupportedChainId, number> = {
      5003: 40246,
      421614: 40231,
      11155111: 40161,
    };

    return endpointIdMap[chainId];
  }

  async configure(args: ConfigureOftDto): Promise<
    {
      txHash?: `0x${string}`;
      message?: any;
      originChain: SupportedChainId;
      destinationChain: SupportedChainId;
    }[]
  > {
    const txHashes = [];
    const pairs = this.generateBlockchainPairs(args);

    for (let index = 0; index < pairs.length; index++) {
      const pair = pairs[index];
      const originChain = pair[0].chainId;
      const destinationChain = pair[1].chainId;
      const destinationEId = this.endpointId(destinationChain);
      const destinationAddress = pair[1].address;
      const publicClient = this.chainService.getPublicClient(originChain);
      const { abi } = this.contractService.findOne('AlTokeOFT');
      const account = this.chainService.getAccount();
      const walletClient = this.chainService.getWalletClient(originChain);
      try {
        const { request } = await publicClient.simulateContract({
          address: pair[0].address,
          abi,
          functionName: 'setPeer',
          args: [destinationEId, pad(destinationAddress)],
          account,
        });

        const txHash = await walletClient.writeContract(request);
        txHashes.push({
          txHash,
          originChain,
          destinationChain,
        });
      } catch (e: any) {
        console.log(e);
        console.log(pair);
        txHashes.push({
          originChain,
          destinationChain,
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
          message: e.message,
        });
      }
    }

    return txHashes;
  }

  generateBlockchainPairs(args: ConfigureOftDto) {
    const configs = args.configurations;
    const pairs: [
      {
        chainId: SupportedChainId;
        address: `0x${string}`;
      },
      {
        chainId: SupportedChainId;
        address: `0x${string}`;
      },
    ][] = [];

    for (let i = 0; i < configs.length; i++) {
      for (let j = 0; j < configs.length; j++) {
        if (i !== j) {
          pairs.push([configs[i], configs[j]]);
        }
      }
    }

    return pairs;
  }
}
