import { Module } from '@nestjs/common';
import { OftService } from './oft.service';
import { OftController } from './oft.controller';
import { ContractsService } from './contracts/contracts.service';
import { ChainService } from './chain/chain.service';
import { EndpointV2ProviderService } from './endpoint-v2-provider/endpoint-v2-provider.service';

@Module({
  controllers: [OftController],
  providers: [
    OftService,
    ContractsService,
    ChainService,
    EndpointV2ProviderService,
  ],
})
export class OftModule {}
