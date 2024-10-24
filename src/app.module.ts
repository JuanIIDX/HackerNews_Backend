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
      type: 'mssql',
      host: process.env.host || config.host,
      port: 1433, // Puerto por defecto de SQL Server
      username: process.env.username || config.username,
      password: process.env.password || config.password,
      database: process.env.database || config.database,
      entities: [News, Comment, Tag],
      synchronize: false, // Sincroniza automáticamente la base de datos (desactiva en producción)
      options: {
        encrypt: true, // Cifrado SSL, útil para conexiones seguras
        trustServerCertificate: true, // Usar solo si el servidor no tiene certificado SSL confiable
      },
    }),
    NewsModule,
    StoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
