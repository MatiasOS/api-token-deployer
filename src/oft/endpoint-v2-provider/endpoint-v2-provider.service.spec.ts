import { Test, TestingModule } from '@nestjs/testing';
import { EndpointV2ProviderService } from './endpoint-v2-provider.service';

describe('EndpointV2ProviderService', () => {
  let service: EndpointV2ProviderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EndpointV2ProviderService],
    }).compile();

    service = module.get<EndpointV2ProviderService>(EndpointV2ProviderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
