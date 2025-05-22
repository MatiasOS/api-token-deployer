import { Test, TestingModule } from '@nestjs/testing';
import { DeployerService } from './deployer.service';

describe('DeployerService', () => {
  let service: DeployerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeployerService],
    }).compile();

    service = module.get<DeployerService>(DeployerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
