import { Module } from '@nestjs/common';
import { OftService } from './oft.service';
import { OftController } from './oft.controller';
import { ConfigService } from '@nestjs/config';
import { SharedModule } from 'src/shared/shared.module';
import { BullModule } from '@nestjs/bullmq';

@Module({
  controllers: [OftController],
  imports: [
    SharedModule,
    BullModule.registerQueue(
      {
        name: 'deployQueue',
      },
      {
        name: 'configQueue',
      },
    ),
  ],
  providers: [OftService, ConfigService],
  exports: [OftService],
})
export class OftModule {}
