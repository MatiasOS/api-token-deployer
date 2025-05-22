import { Module } from '@nestjs/common';
import { MerkleTreeService } from './merkle-tree.service';
import { MerkleTreeController } from './merkle-tree.controller';
import { ChainModule } from 'src/chain/chain.module';

@Module({
  controllers: [MerkleTreeController],
  providers: [MerkleTreeService],
  imports: [ChainModule],
})
export class MerkleTreeModule {}
