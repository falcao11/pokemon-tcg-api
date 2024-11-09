import { Test, TestingModule } from '@nestjs/testing';
import { CardCollectionsService } from './card-collections.service';

describe('CardCollectionsService', () => {
  let service: CardCollectionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CardCollectionsService],
    }).compile();

    service = module.get<CardCollectionsService>(CardCollectionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
