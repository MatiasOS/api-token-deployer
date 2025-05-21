import { Test, TestingModule } from '@nestjs/testing';
import { OftController } from './oft.controller';
import { OftService } from './oft.service';

describe('OftController', () => {
  let controller: OftController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OftController],
      providers: [OftService],
    }).compile();

    controller = module.get<OftController>(OftController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
