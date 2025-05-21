import { Module } from '@nestjs/common';
import { OftService } from './oft.service';
import { OftController } from './oft.controller';
import { ContractsService } from './contracts/contracts.service';
import { DeployerService } from './deployer/deployer.service';
import { EndpointV2ProviderService } from './endpoint-v2-provider/endpoint-v2-provider.service';

@Module({
  controllers: [OftController],
  providers: [
    OftService,
    ContractsService,
    DeployerService,
    EndpointV2ProviderService,
  ],
})
export class OftModule {}
