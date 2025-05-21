import { Test, TestingModule } from '@nestjs/testing';
import { TokenValueService } from './token-value.service';

describe('CoinValueService', () => {
  let service: TokenValueService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TokenValueService],
    }).compile();

    service = module.get<TokenValueService>(TokenValueService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
