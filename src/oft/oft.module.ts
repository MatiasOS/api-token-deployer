import { Module } from '@nestjs/common';
import { OftService } from './oft.service';
import { OftController } from './oft.controller';
import { EndpointV2ProviderService } from './endpoint-v2-provider/endpoint-v2-provider.service';
import { ChainModule } from 'src/chain/chain.module';
import { ContractsModule } from 'src/contracts/contracts.module';

@Module({
  controllers: [OftController],
  imports: [ChainModule, ContractsModule],
  providers: [OftService, EndpointV2ProviderService],
})
export class OftModule {}
