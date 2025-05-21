import { Controller, Post, Body } from '@nestjs/common';
import { EstimatesService } from './estimates.service';
import { CreateEstimateDto } from './dto/create-estimate.dto';

@Controller('estimates')
export class EstimatesController {
  constructor(private readonly estimatesService: EstimatesService) {}

  @Post()
  create(@Body() createEstimateDto: CreateEstimateDto) {
    return this.estimatesService.estimateByBlockchain(createEstimateDto);
  }
}
