import { StoryService } from './story.service';
import { CreateStoryDto } from './dto/create-story.dto';
export declare class StoryController {
    private readonly storyService;
    constructor(storyService: StoryService);
    create(createStoryDto: CreateStoryDto): Promise<import("./entities/story.entity").Story>;
    findAll(): {
        text: string;
    }[];
    findOne(id: string): Promise<import("./entities/story.entity").Story>;
}
