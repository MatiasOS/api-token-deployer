import { Module } from '@nestjs/common';
import { NebulaService } from './nebula.service';
import { NebulaController } from './nebula.controller';

@Module({
  controllers: [NebulaController],
  providers: [NebulaService],
})
export class NebulaModule {}
