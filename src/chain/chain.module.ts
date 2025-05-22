import { Module } from '@nestjs/common';
import { ChainService } from './chain.service';
import { ConfigService } from '@nestjs/config';
import { ContractsService } from 'src/contracts/contracts.service';

@Module({
  providers: [ChainService, ConfigService, ContractsService],
  exports: [ChainService],
})
export class ChainModule {}
