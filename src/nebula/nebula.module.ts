import { Module } from '@nestjs/common';
import { NebulaService } from './nebula.service';
import { NebulaController } from './nebula.controller';
import { ConfigService } from '@nestjs/config';

@Module({
  controllers: [NebulaController],
  providers: [NebulaService, ConfigService],
})
export class NebulaModule {}
