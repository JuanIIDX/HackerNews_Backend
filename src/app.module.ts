import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewsModule } from './news/news.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './config';
import { News } from './news/entities/news.entity';
import { StoryModule } from './story/story.module';
import { Story } from './story/entities/story.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      port: config.DATABASE_PORT,
      host: config.DATABASE_HOST,
      database: config.DATABASE_NAME,
      username: config.DATABASE_USERNAME,
      password: config.DATABASE_PASSWORD,
      entities: [News, Story
       ],
      synchronize: true,
  }),
    NewsModule,
    StoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
