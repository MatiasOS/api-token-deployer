import { Injectable } from '@nestjs/common';
import { TokenValueService } from 'src/estimates/token-value.service';
import { SupportedChainId } from 'src/shared/types/chainId.types';

export interface EstimateResultItem {
  base: number;
  chainId: SupportedChainId;
}

@Injectable()
export class EstimatesService {
  constructor(private readonly coingreckoService: TokenValueService) {}

  estimateByBlockchain(chainId: SupportedChainId): EstimateResultItem {
    return {
      chainId,
      base: 100,
    };
  }
}
