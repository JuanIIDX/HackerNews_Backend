import 'dotenv/config';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StoryModule } from './stories/stories.module';
import { NewsModule } from './news/news.module';
import { Comment } from './news/entities/comment.entity';
import { News } from './news/entities/news.entity';
import { Tag } from './news/entities/tag.entity';
import {Story} from './stories/entities/story.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host:  process.env.DB_HOST ,
      port: 1433, // Puerto por defecto de SQL Server
      username:   process.env.DB_USERNAME,
      password:  process.env.DB_PASSWORD ,
      database:   process.env.DB_DATABASE,
      entities: [News, Comment, Tag, Story], // Entidades a sincronizar
      synchronize: false, // Sincroniza automáticamente la base de datos
      options: {
        encrypt: true, // Cifrado SSL, útil para conexiones seguras
        trustServerCertificate: true, // Usar solo si el servidor no tiene certificado SSL confiable
      },
    }),
    StoryModule,
    NewsModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
