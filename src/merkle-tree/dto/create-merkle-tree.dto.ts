import { SupportedChainId } from 'src/shared/types/chainId.types';

export class CreateMerkleTreeDto {
  distribution: {
    address: `0x${string}`;
    amount: number;
    chainId: SupportedChainId;
  }[];
}
