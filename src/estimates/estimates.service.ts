import { Injectable } from '@nestjs/common';
import { TokenValueService } from 'src/estimates/token-value.service';
import { SupportedChainId } from 'src/shared/types/chainId.types';

export interface EstimateResultItem {
  base: number;
  chainId: SupportedChainId;
}

@Injectable()
export class EstimatesService {
  constructor(private readonly tokenValueService: TokenValueService) {}

  async bySymbols({ symbols }: { symbols: string[] }) {
    return this.tokenValueService.getTokenValue({ symbols });
  }
}
