import { Module } from '@nestjs/common';
import { MerkleTreeService } from './merkle-tree.service';
import { MerkleTreeController } from './merkle-tree.controller';
import { OftModule } from 'src/oft/oft.module';
import { SharedModule } from 'src/shared/shared.module';

@Module({
  imports: [OftModule, SharedModule],
  controllers: [MerkleTreeController],
  providers: [MerkleTreeService],
  exports: [MerkleTreeService],
})
export class MerkleTreeModule {}
