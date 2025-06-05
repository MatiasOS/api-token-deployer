import { SupportedChainId } from 'src/shared/types/chainId.types';

export class CreateOftDto {
  chainId: SupportedChainId;
  name: string;
  symbol: string;
  distributions: Record<
    SupportedChainId,
    {
      address: `0x${string}`;
      amount: string;
    }[]
  >;
}
