import { Module } from '@nestjs/common';
import { OftService } from './oft.service';
import { OftController } from './oft.controller';
import { ConfigService } from '@nestjs/config';
import { SharedModule } from 'src/shared/shared.module';
import { BullModule } from '@nestjs/bullmq';
import { MerkleTreeService } from 'src/merkle-tree/merkle-tree.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Oft } from './entities/oft.entity';
import { OftPeer } from './entities/oftPeers.entity';
import { DeployQueueService } from './queue/deploy.queue';
import { ConfigQueueService } from './queue/config.queue';

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
    TypeOrmModule.forFeature([Oft, OftPeer]),
  ],
  providers: [
    OftService,
    ConfigService,
    MerkleTreeService,
    DeployQueueService,
    ConfigQueueService,
  ],
  exports: [OftService, TypeOrmModule],
})
export class OftModule {}
