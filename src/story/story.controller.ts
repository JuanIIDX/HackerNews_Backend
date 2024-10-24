import { Controller, Get, Post, Body, Patch, Param, Delete,Query } from '@nestjs/common';
import { StoryService } from './story.service';
import { CreateStoryDto } from './dto/create-story.dto';
import { UpdateStoryDto } from './dto/update-story.dto';
import { ApiQuery, ApiTags, ApiOperation } from '@nestjs/swagger';

@Controller('story')
export class StoryController {
  constructor(private readonly storyService: StoryService) {}
  
  //obtiene los datos de la tabla news a partir del servicio de noticias
  @Get('search_by_date')
  @ApiOperation({ summary: 'Obtiene los datos de la tabla news---Es el que usa en la prueba' })
  @ApiQuery({ name: 'page', required: false, type: Number, description: 'Página actual' })
  @ApiQuery({ name: 'query', required: false, type: String, description: 'Búsqueda en el título o texto de la historia' })
  @ApiQuery({ name: 'hitsPerPage', required: false, type: Number, description: 'Número de resultados por página' })
  hitsQuery(
    @Query('page') page?: number,
    @Query('query') query?: string,
    @Query('hitsPerPage') hitsPerPage?: number,
  ) {

    // Si 'page' o 'search' no se proporcionan, se establecen valores predeterminados
    const currentPage = page || 0;
    const currentSearch = query || '';
    const currentHitsInPage = hitsPerPage || 10;

    return this.storyService.getStoryByDate(currentSearch, currentPage, currentHitsInPage);
  }








}
