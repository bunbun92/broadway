import { Test, TestingModule } from '@nestjs/testing';
import { KopisApiController } from './kopis-api.controller';

describe('KopisApiController', () => {
  let controller: KopisApiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KopisApiController],
    }).compile();

    controller = module.get<KopisApiController>(KopisApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
