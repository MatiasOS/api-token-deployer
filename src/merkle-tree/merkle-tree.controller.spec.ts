import { Test, TestingModule } from '@nestjs/testing';
import { MerkleTreeController } from './merkle-tree.controller';
import { MerkleTreeService } from './merkle-tree.service';

describe('MerkleTreeController', () => {
  let controller: MerkleTreeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MerkleTreeController],
      providers: [MerkleTreeService],
    }).compile();

    controller = module.get<MerkleTreeController>(MerkleTreeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
