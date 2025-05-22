/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Injectable } from '@nestjs/common';
import { CreateMerkleTreeDto } from './dto/create-merkle-tree.dto';
import { StandardMerkleTree } from '@openzeppelin/merkle-tree';
import { DeployMerkletreeDto } from './dto/deploy-merkle-tree.dto';
import { ChainService } from 'src/chain/chain.service';

const blockchainMap: Record<'ethereum' | 'mantle' | 'arbitrum', string> = {
  ethereum: 'sepolia',
  mantle: 'mantleSepoliaTestnet',
  arbitrum: 'arbitrumSepolia',
};
@Injectable()
export class MerkleTreeService {
  constructor(private readonly chainService: ChainService) {}

  create(
    createMerkleTreeDto: CreateMerkleTreeDto,
  ): Record<string, StandardMerkleTree<[string, string]>> {
    const { distribution } = createMerkleTreeDto;

    // Group by blockchain
    const grouped = distribution.reduce<
      Record<string, { address: string; amount: number }[]>
    >((acc, { blockchain, address, amount }) => {
      if (!acc[blockchain]) {
        acc[blockchain] = [];
      }
      acc[blockchain].push({ address, amount });
      return acc;
    }, {});

    const trees: Record<string, StandardMerkleTree<[string, string]>> = {};

    for (const [blockchain, claims] of Object.entries(grouped)) {
      const transformedClaims: [string, string][] = claims.map(
        ({ address, amount }) => [address, amount.toString()],
      );

      const tree: StandardMerkleTree<[string, string]> = StandardMerkleTree.of(
        transformedClaims,
        ['address', 'uint256'],
      );
      trees[blockchain] = tree;
    }

    return trees;
  }

  async deploy(deployMerkletreeDto: DeployMerkletreeDto): Promise<{
    txHash: string;
  }> {
    const { blockchain } = deployMerkletreeDto;
    const chain = blockchainMap[blockchain] as
      | 'sepolia'
      | 'mantleSepoliaTestnet'
      | 'arbitrumSepolia';
    const txHash = await this.chainService.deploy({
      chain,
      contractName: 'MerkleDistributor',
      deployArgs: [deployMerkletreeDto.oftAddress, deployMerkletreeDto.root],
    });

    return { txHash };
  }
}
