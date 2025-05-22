import { Module } from '@nestjs/common';
import { ChainService } from './chain.service';
import { ChainController } from './chain.controller';
import { ConfigService } from '@nestjs/config';
import { ContractsService } from 'src/contracts/contracts.service';

@Module({
  controllers: [ChainController],
  providers: [ChainService, ConfigService, ContractsService],
  exports: [ChainService],
})
export class ChainModule {}
