import { Injectable } from '@nestjs/common';
import { CreateOftDto } from './dto/create-oft.dto';
import { DeployerService } from './deployer/deployer.service';
import { EndpointV2ProviderService } from './endpoint-v2-provider/endpoint-v2-provider.service';

const blockchainMap: Record<'ethereum' | 'mantle' | 'arbitrum', string> = {
  ethereum: 'sepolia',
  mantle: 'mantleSepoliaTestnet',
  arbitrum: 'arbitrumSepolia',
};

@Injectable()
export class OftService {
  constructor(
    private readonly deployerService: DeployerService,
    private readonly endpointV2Provider: EndpointV2ProviderService,
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
      const endpointV2Address =
        this.endpointV2Provider.endpointV2Address(chain);

      const initialSupply = this.initialSupply({
        chain: specificBlockchain,
        distributions: createOftDto.distributions,
      });
      const txHash = this.deployerService.deploy({
        chain,
        contractName: 'AlTokeOFT',
        deployArgs: {
          ...alTokeOFTArgs,
          endpointV2Address,
          initialSupply: initialSupply,
        },
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

  findOne(id: number) {
    return `This action returns a #${id} oft`;
  }
}
