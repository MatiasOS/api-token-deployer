import { Test, TestingModule } from '@nestjs/testing';
import { NebulaService } from './nebula.service';

describe('NebulaService', () => {
  let service: NebulaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NebulaService],
    }).compile();

    service = module.get<NebulaService>(NebulaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
