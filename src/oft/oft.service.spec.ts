import { Test, TestingModule } from '@nestjs/testing';
import { OftService } from './oft.service';

describe('OftService', () => {
  let service: OftService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OftService],
    }).compile();

    service = module.get<OftService>(OftService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
