import { Test, TestingModule } from '@nestjs/testing';

import { StoryService } from './stories.service';
import { StoryController } from './stories.controller';

describe('StoriesController', () => {
  let controller: StoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StoryController],
      providers: [StoryService],
    }).compile();

    controller = module.get<StoryController>(StoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
