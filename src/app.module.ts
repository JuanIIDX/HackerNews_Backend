import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './config';
import { News } from './news/entities/news.entity';
import { NewsModule } from './news/news.module';
import { StoryModule } from './story/story.module';
import { Comment } from './news/entities/comment.entity';
import { Story } from './story/entities/story.entity';
import { Tag } from './news/entities/tag.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      port: config.DATABASE_PORT,
      host: config.DATABASE_HOST,
      database: config.DATABASE_NAME,
      username: config.DATABASE_USERNAME,
      password: config.DATABASE_PASSWORD,
      entities: [News, Story,Tag, Comment
       ],
      synchronize: true,
  }),
    NewsModule,
    StoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
