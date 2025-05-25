import { Module } from '@nestjs/common';
import { OftService } from './oft.service';
import { OftController } from './oft.controller';
import { ConfigService } from '@nestjs/config';
import { SharedModule } from 'src/shared/shared.module';

@Module({
  controllers: [OftController],
  imports: [SharedModule],
  providers: [OftService, ConfigService],
  exports: [OftService],
})
export class OftModule {}
