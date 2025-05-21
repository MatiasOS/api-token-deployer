import { Test, TestingModule } from '@nestjs/testing';
import { EstimatesService } from './estimates.service';

describe('EstimatesService', () => {
  let service: EstimatesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EstimatesService],
    }).compile();

    service = module.get<EstimatesService>(EstimatesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
