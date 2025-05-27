import { Injectable } from '@nestjs/common';
import { CreateMerkleTreeDto } from './dto/create-merkle-tree.dto';
import { StandardMerkleTree } from '@openzeppelin/merkle-tree';
import { DeployMerkletreeDto } from './dto/deploy-merkle-tree.dto';
import { ChainService } from '../shared/chain/chain.service';
import { SupportedChainId } from 'src/shared/types/chainId.types';

@Injectable()
export class MerkleTreeService {
  constructor(private readonly chainService: ChainService) {}

  create(
    createMerkleTreeDto: CreateMerkleTreeDto,
  ): Partial<Record<SupportedChainId, StandardMerkleTree<[string, string]>>> {
    const { distribution } = createMerkleTreeDto;

    // Group by chainId
    const grouped = distribution.reduce<
      Partial<
        Record<
          SupportedChainId,
          {
            address: `0x${string}`;
            amount: number;
          }[]
        >
      >
    >((acc, { chainId, address, amount }) => {
      if (!acc[chainId]) {
        acc[chainId] = [];
      }
      acc[chainId].push({ address, amount });
      return acc;
    }, {});

    const trees: Partial<
      Record<SupportedChainId, StandardMerkleTree<[string, string]>>
    > = {};

    for (const [chainId, claims] of Object.entries(grouped)) {
      const transformedClaims: [string, string][] = claims.map(
        ({ address, amount }) => [address, amount.toString()],
      );

      const tree: StandardMerkleTree<[string, string]> = StandardMerkleTree.of(
        transformedClaims,
        ['address', 'uint256'],
      );
      trees[chainId as unknown as SupportedChainId] = tree;
    }

    return trees;
  }

  async deploy(deployMerkletreeDto: DeployMerkletreeDto): Promise<{
    txHash: string;
  }> {
    const { chainId } = deployMerkletreeDto;
    const txHash = await this.chainService.deploy({
      chainId,
      contractName: 'MerkleDistributor',
      deployArgs: [deployMerkletreeDto.oftAddress, deployMerkletreeDto.root],
    });

    return { txHash };
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
}
