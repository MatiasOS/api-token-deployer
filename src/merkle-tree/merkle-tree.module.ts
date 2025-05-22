import { Module } from '@nestjs/common';
import { MerkleTreeService } from './merkle-tree.service';
import { MerkleTreeController } from './merkle-tree.controller';

@Module({
  controllers: [MerkleTreeController],
  providers: [MerkleTreeService],
})
export class MerkleTreeModule {}
