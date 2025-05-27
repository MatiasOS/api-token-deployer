import { SupportedChainId } from 'src/shared/types/chainId.types';

export class DeployMerkletreeDto {
  chainId: SupportedChainId;
  root: `0x${string}`;
  oftAddress: `0x${string}`;
}
