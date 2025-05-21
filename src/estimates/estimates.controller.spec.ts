import { Test, TestingModule } from '@nestjs/testing';
import { EstimatesController } from './estimates.controller';
import { EstimatesService } from './estimates.service';

describe('EstimatesController', () => {
  let controller: EstimatesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EstimatesController],
      providers: [EstimatesService],
    }).compile();

    controller = module.get<EstimatesController>(EstimatesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
