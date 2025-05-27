import { Controller, Body, Get, Query } from '@nestjs/common';
import { EstimatesService } from './estimates.service';
import { SupportedChainId } from 'src/shared/types/chainId.types';

@Controller('estimates')
export class EstimatesController {
  constructor(private readonly estimatesService: EstimatesService) {}

  @Get()
  create(@Query() chainId: SupportedChainId) {
    return this.estimatesService.estimateByBlockchain(chainId);
  }
}
