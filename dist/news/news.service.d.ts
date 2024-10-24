import { CreateNewsDto } from './dto/create-news.dto';
import { News } from './entities/news.entity';
import { Repository } from 'typeorm';
export declare class NewsService {
    private newsRepository;
    constructor(newsRepository: Repository<News>);
    create(createNewsDto: CreateNewsDto): Promise<News>;
    findAll(): {
        text: string;
    }[];
}
