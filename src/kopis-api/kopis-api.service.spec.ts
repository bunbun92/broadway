import { Test, TestingModule } from '@nestjs/testing';
import { KopisApiService } from './kopis-api.service';

describe('KopisApiService', () => {
  let service: KopisApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KopisApiService],
    }).compile();

    service = module.get<KopisApiService>(KopisApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
