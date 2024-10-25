import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Story } from './entities/story.entity';
import { News } from '../news/entities/news.entity';
import { StoryController } from './stories.controller';
import { StoryService } from './stories.service';
import { NewsService } from '../news/news.service';
import { NewsController } from '../news/news.controller';


@Module({
  imports : [TypeOrmModule.forFeature([Story,News])],
  controllers: [StoryController,NewsController],
  providers: [StoryService,NewsService],
})
export class StoryModule {}