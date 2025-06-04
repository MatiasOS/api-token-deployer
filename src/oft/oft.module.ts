import { Module } from '@nestjs/common';
import { OftService } from './oft.service';
import { OftController } from './oft.controller';
import { ConfigService } from '@nestjs/config';
import { SharedModule } from 'src/shared/shared.module';
import { BullModule } from '@nestjs/bullmq';
import { MerkleTreeService } from 'src/merkle-tree/merkle-tree.service';
import { ChainService } from 'src/shared/chain/chain.service';
import { ContractsService } from 'src/shared/contracts/contracts.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Oft_Peers, Ofts } from './oft.entity';

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
    TypeOrmModule.forFeature([Ofts, Oft_Peers]),
  ],
  providers: [
    OftService,
    ConfigService,
    MerkleTreeService,
    ChainService,
    ContractsService,
  ],
  exports: [OftService],
})
export class OftModule {}
