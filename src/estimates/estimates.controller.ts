import { Controller, Body, Get, Query } from '@nestjs/common';
import { EstimatesService } from './estimates.service';

@Controller('estimates')
export class EstimatesController {
  constructor(private readonly estimatesService: EstimatesService) {}

  @Get()
  create(@Query('symbols') symbols: string[]) {
    return this.estimatesService.bySymbols({ symbols });
  }
}
