import { Module } from '@nestjs/common';
import { MerkleTreeService } from './merkle-tree.service';
import { MerkleTreeController } from './merkle-tree.controller';
import { ChainModule } from 'src/chain/chain.module';
import { OftService } from 'src/oft/oft.service';
import { OftModule } from 'src/oft/oft.module';
import { ContractsService } from 'src/contracts/contracts.service';
import { ContractsModule } from 'src/contracts/contracts.module';

@Module({
  controllers: [MerkleTreeController],
  providers: [MerkleTreeService, OftService, OftService, ContractsService],
  imports: [ChainModule, OftModule, ContractsModule],
  exports: [MerkleTreeService],
})
export class MerkleTreeModule {}
