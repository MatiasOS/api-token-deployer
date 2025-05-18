import { Test, TestingModule } from '@nestjs/testing';
import { NebulaController } from './nebula.controller';
import { NebulaService } from './nebula.service';

describe('NebulaController', () => {
  let controller: NebulaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NebulaController],
      providers: [NebulaService],
    }).compile();

    controller = module.get<NebulaController>(NebulaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
