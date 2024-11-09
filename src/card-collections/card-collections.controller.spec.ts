import { Test, TestingModule } from '@nestjs/testing';
import { CardCollectionsController } from './card-collections.controller';
import { CardCollectionsService } from './card-collections.service';

describe('CardCollectionsController', () => {
  let controller: CardCollectionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CardCollectionsController],
      providers: [CardCollectionsService],
    }).compile();

    controller = module.get<CardCollectionsController>(CardCollectionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
