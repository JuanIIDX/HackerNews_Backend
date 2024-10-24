import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { NewsService } from './news.service';
import { CreateNewsDto } from './dto/create-news.dto';
import { ApiQuery, ApiTags, ApiOperation } from '@nestjs/swagger';
import { UpdateNewsDto } from './dto/update-news.dto';

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}



    @Post('insert')
    @ApiOperation({ summary: 'Inserta noticias' })
    async insertNews(@Body() info: any[]): Promise<string> {
      await this.newsService.insertnews(info);
      return 'Comments inserted successfully!';
    }

    //Get que permite obtener todas las noticias
    @Get()
    @ApiOperation({ summary: 'Obtiene todas las noticias' })
    findAll() {
      return this.newsService.findAll();
    }

    //Get que permite obtener las noticias en un rango de posiciones
    @Get('range')
    @ApiOperation({ summary: 'Obtiene las noticias en un rango de posiciones' })
    findRange(@Query('start') start: number, @Query('end') end: number) {
      return this.newsService.findRange(start, end);
    }

    //Get que permite saber el numero de noticias
    @Get('count')
    @ApiOperation({ summary: 'Obtiene el número de noticias' })
  
    countNews() {
      return this.newsService.countNews();
    }

    //Get que permite saber el numero de noticias que contienen un substring
    @Get('countsubstring')
    @ApiOperation({ summary: 'Obtiene el número de noticias que contienen un substring' })
    @ApiQuery({ name: 'substring', required: true, type: String, description: 'Substring a buscar' })
    countBySubstring(@Query('substring') substring: string) {
      return this.newsService.countBySubstring(substring);
    }

    //Get que permite obtener las noticias en un rango de posiciones y que tengan un comentario especifico
    @Get('rangecomment')
      @ApiOperation({ summary: 'Obtiene las noticias en un rango de posiciones y que tengan un comentario especifico' })
      @ApiQuery({ name: 'start', required: true, type: Number, description: 'Posición inicial' })
      @ApiQuery({ name: 'end', required: true, type: Number, description: 'Posición final' })
      @ApiQuery({ name: 'comment', required: true, type: String, description: 'Comentario a buscar' })

    findRangeComment(@Query('start') start: number, @Query('end') end: number, @Query('comment') comment: string) {
      return this.newsService.findRangeComment(start, end, comment);
    }












}
