import { CreateStoryDto } from './dto/create-story.dto';
import { UpdateStoryDto } from './dto/update-story.dto';
import { Story } from './entities/story.entity';
import { Repository } from 'typeorm';
export declare class StoryService {
    private storyRepository;
    constructor(storyRepository: Repository<Story>);
    create(createStoryDto: CreateStoryDto): Promise<Story>;
    findAll(): Promise<Story[]>;
    findOne(id: number): Promise<Story>;
    update(id: number, updateStoryDto: UpdateStoryDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
