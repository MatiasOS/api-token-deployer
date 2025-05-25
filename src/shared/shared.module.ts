import { Module } from '@nestjs/common';
import { ChainModule } from './chain/chain.module';
import { ContractsModule } from './contracts/contracts.module';

@Module({
  imports: [ChainModule, ContractsModule],
  exports: [ChainModule, ContractsModule],
})
export class SharedModule {}
