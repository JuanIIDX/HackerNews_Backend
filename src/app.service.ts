import 'dotenv/config';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Se usan las siguientes endpoints para su uso \n ★ https://hackernews-function.azurewebsites.net/api/news O \n ★ https://hackernews-function.azurewebsites.net/api/story/search_by_date?query=Angular&page=0&hitsPerPage=8';
  }
}
