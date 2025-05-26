import { SupportedChainId } from 'src/shared/types/chainId.types';

export class ConfigureOftDto {
  configurations: {
    chainId: SupportedChainId;
    address: `0x${string}`;
  }[];
}
