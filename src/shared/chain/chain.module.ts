import { Module } from '@nestjs/common';
import { ChainService } from './chain.service';
import { ConfigService } from '@nestjs/config';
import { ContractsService } from 'src/shared/contracts/contracts.service';
import { ContractsModule } from '../contracts/contracts.module';

@Module({
  imports: [ContractsModule],
  providers: [ChainService, ConfigService, ContractsService],
  exports: [ChainService],
})
export class ChainModule {}
