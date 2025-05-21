import { Module } from '@nestjs/common';
import { OftService } from './oft.service';
import { OftController } from './oft.controller';
import { ContractsService } from './contracts/contracts.service';

@Module({
  controllers: [OftController],
  providers: [OftService, ContractsService],
})
export class OftModule {}
