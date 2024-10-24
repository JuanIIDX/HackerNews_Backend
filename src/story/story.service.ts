import { Injectable } from '@nestjs/common';
import { CreateStoryDto } from './dto/create-story.dto';
import { UpdateStoryDto } from './dto/update-story.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Story } from './entities/story.entity';
import { News } from '../news/entities/news.entity';
import { Repository } from 'typeorm';
import { NewsService } from 'src/news/news.service';

@Injectable()
export class StoryService {

  //crea un constructor
  constructor( 
      @InjectRepository(Story)
      private storyRepository: Repository<Story>,
      private newsService: NewsService
  ) 
  {
    
  }

  //Metodo para obtener datos especificos, devuelve un diccionario con ciertos datos y ademas toda una lista que obtiene del servicio de noticias
  async getStoryByDate(  
    query: string,
    page: number,
    hits_in_page: number,
  ): Promise<any> {
    //Obtiene todos los datos de la tabla news a partir del servicio de noticias del metodo findAll

    //Contador de cuantas noticias hay en la tabla news

    let count = 0;
    if(query===""){
      count = await this.newsService.countNews();
    }
    else{
      count = await this.newsService.countBySubstring(query);
    }

    //Calcula el numero de paginas que se necesitan para mostrar todas las noticias
    const pages = Math.ceil(count / hits_in_page);


    //Si la pagina es mayor al numero de paginas que se necesitan, entonces se pone la pagina en el numero de paginas
    if (page > pages) {
      page = pages;
    }
    //Si la pagina es menor a 1, entonces se pone la pagina en 1
    if (page < 0) {
      page = 0;
    }

    //Se establecen los valores de rango desde que posicion hasta que posicion se van a obtener las noticias
    const start:number = (page ) * hits_in_page;
    const end: number = Math.floor(start )+Math.floor(hits_in_page);

    let news: News[] = [];

    //Si el query es vacio, entonces se obtienen todas las noticias
    if(query===""){
      console.log("query vacio")
      news = await this.newsService.findRangeOrderByDate(start,hits_in_page);
    }
    else{
      console.log("query no vacio")
      news = await this.newsService.findRangeBySubstringOrderByDate(start,hits_in_page,query);
    }


    const diccionario= {
      "hitsPerPage": hits_in_page,
      "nbHits": count,
      "nbPages": pages,
      "page": page,
      "query": query,
      "begin": start,
      "end": end,
      "hits": news
  }
    return diccionario;
  }



 
/*   create(createStoryDto: CreateStoryDto) {
    const story = this.storyRepository.create(createStoryDto);
    return this.storyRepository.save(story);
  }

  findAll() {
    return this.storyRepository.find();
  }

  findOne(id: number) {
    return this.storyRepository.findOne({
      where: { id },
    });
  }
   */
  

/*   findAll() {
    return this.storyRepository.find();
  }

  findOne(id: number) {
    return this.storyRepository.findOne({
      where: { id },
    });
  }

  update(id: number, updateStoryDto: UpdateStoryDto) {
    return this.storyRepository.update(id, updateStoryDto);
  }

  remove(id: number) {
    return this.storyRepository.delete(id);
  } */
}
