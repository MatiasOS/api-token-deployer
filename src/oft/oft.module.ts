import { Module } from '@nestjs/common';
import { OftService } from './oft.service';
import { OftController } from './oft.controller';
import { ChainModule } from 'src/chain/chain.module';
import { ContractsModule } from 'src/contracts/contracts.module';
import { ConfigService } from '@nestjs/config';
import { ContractsService } from 'src/contracts/contracts.service';

@Module({
  controllers: [OftController],
  imports: [ChainModule, ContractsModule],
  providers: [OftService, ConfigService, ContractsService],
})
export class OftModule {}
