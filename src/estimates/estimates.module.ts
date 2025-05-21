import { Module } from '@nestjs/common';
import { EstimatesService } from './estimates.service';
import { EstimatesController } from './estimates.controller';
import { TokenValueService } from 'src/token-value/token-value.service';

@Module({
  controllers: [EstimatesController],
  providers: [EstimatesService, TokenValueService],
})
export class EstimatesModule {}
