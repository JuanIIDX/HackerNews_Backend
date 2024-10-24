import { Injectable } from '@nestjs/common';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { News } from './entities/news.entity';
import { ILike, Like, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class NewsService {
  constructor(
    @InjectRepository(News)
    private newsRepository: Repository<News>,
  ) {}

  

  //Metodo que encuentra todos los datos de la tabla news y los devuelve
  findAll() {
    return this.newsRepository.find();
  }

  //Metodo que devuelve los datos en un rango de posciones, ejemplo los resultados desde el 10 hasta el 20
  findRange(start: number, end: number) {
    return this.newsRepository.find({
      skip: start,
      take: end,
    });
  }
  //Metodo que devuelve los datos en un rango de posciones, ejemplo los resultados desde el 10 hasta el 20, ademas revisa si existe
  //un string en la columna comment_text
  findRangeComment(start: number, end: number, comment: string) {
    return this.newsRepository.find({
      skip: start,
      take: end,
      where: { comment_text: comment },
    });
  }

  //Metodo que devuelve los datos en un rango de posciones, ejemplo los resultados desde el 10 hasta el 20, y los ordena de mayor a menor segun la fecha
  findRangeOrderByDate(start: number, end: number) {
    return this.newsRepository.find({
      skip: start,
      take: end,
      order: { created_at: 'DESC' },
    });
  }



  async findRangeBySubstringOrderByDate(start: number, end: number, substring: string): Promise<News[]> {
    // Crear el query builder
    const queryBuilder = this.newsRepository.createQueryBuilder('news');
    const query = `%${substring}%`;
  
    // Construir la consulta con condiciones y relaciones
    queryBuilder
      .leftJoinAndSelect('news.tags', 'tags') // Cargar los tags relacionados
      .leftJoinAndSelect('news.comments', 'comments') // Cargar los comentarios relacionados
      .where(
        '(news.story_title LIKE :substring OR news.comment_text LIKE :substring ' +
        'OR tags.name_tag LIKE :substring OR comments.comment_text LIKE :substring)', 
        { substring: query }
      )
      .orderBy('news.created_at', 'DESC')
      .skip(start)
      .take(end);
  
    // Obtener la consulta SQL y los parámetros
    const [sqlQuery, parameters] = queryBuilder.getQueryAndParameters();
  
    // Reemplazar el placeholder con el valor del parámetro para depuración
    const formattedSql = sqlQuery.replace(/\$\d+/g, () => `'${parameters[0]}'`);
  
    // Imprimir la consulta SQL y los parámetros
    console.log('Generated SQL Query with values:', formattedSql);
    console.log('Parameters:', parameters);
  
    // Ejecutar la consulta y devolver los resultados
    return queryBuilder.getMany();
  }





  //Count methods
  /**
   * Counts the total number of news entries in the repository.
   *
   * @returns {Promise<number>} A promise that resolves to the total count of news entries.
   */
  async countNews(): Promise<number> {
    return this.newsRepository.count();
  }

  /**
   * Counts the number of news records that contain a given substring in their story title, comment text, tag name, or comment text.
   * 
   * This method constructs a query to search for the substring in the specified fields and counts the distinct news records that match.
   * It also logs the generated SQL query and its parameters for debugging purposes.
   * 
   * @param {string} substring - The substring to search for within the news records.
   * @returns {Promise<number>} - A promise that resolves to the count of distinct news records containing the substring.
   */
  async countBySubstring(substring: string): Promise<number> {
    // Crear el query builder
    const queryBuilder = this.newsRepository.createQueryBuilder('news');
    const query = `%${substring}%`;
  
    // Construir la consulta con condiciones y relaciones
    queryBuilder
      .leftJoin('news.tags', 'tags') // Relacionar con tags
      .leftJoin('news.comments', 'comments') // Relacionar con comentarios
      .where(
        '(news.story_title LIKE :substring OR news.comment_text LIKE :substring ' +
        'OR tags.name_tag LIKE :substring OR comments.comment_text LIKE :substring)', 
        { substring: query }
      )
      .select('COUNT(DISTINCT(news.id))', 'count'); // Seleccionar el conteo de registros únicos
  
    // Obtener la consulta SQL y los parámetros
    const [sqlQuery, parameters] = queryBuilder.getQueryAndParameters();
  
    // Reemplazar el placeholder con el valor del parámetro para depuración
    const formattedSql = sqlQuery.replace(/\$\d+/g, () => `'${parameters[0]}'`);
  
    // Imprimir la consulta SQL y los parámetros
    console.log('Generated SQL Query with values:', formattedSql);
    console.log('Parameters:', parameters);
  
    // Ejecutar la consulta y obtener el resultado
    const result = await queryBuilder.getRawOne();
  
    // Devolver la cantidad de registros
    return parseInt(result.count, 10);
  }









  /**
   * Inserts multiple news items into the database.
   *
   * @param info - An array of objects containing news information to be inserted.
   * @returns A promise that resolves when all news items have been inserted.
   */
  async insertnews(info: any[]): Promise<void> {
    // Recorre el vector y guarda cada objeto en la base de datos
    for (const item of info) {
      const comment = this.newsRepository.create(item); // Crea una instancia de la entidad
      await this.newsRepository.save(comment); // Guarda en la base de datos
    }
  }

  
}
