import { SupportedChainId } from 'src/shared/types/chainId.types';

export class ConfigureMerkleTreeDto {
  tokenAddress: `0x${string}`;
  merkleTreeAddress: `0x${string}`;
  chainId: SupportedChainId;
  transferAmount: bigint;
}
