import { Module } from '@nestjs/common';
import { StoryService } from './story.service';
import { StoryController } from './story.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Story } from './entities/story.entity';

import { NewsService } from 'src/news/news.service';
import { News } from 'src/news/entities/news.entity';


@Module({
  imports : [TypeOrmModule.forFeature([Story,News])],
  controllers: [StoryController],
  providers: [StoryService,NewsService],
})
export class StoryModule {}
