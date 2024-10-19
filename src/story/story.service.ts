import { Injectable } from '@nestjs/common';
import { CreateStoryDto } from './dto/create-story.dto';
import { UpdateStoryDto } from './dto/update-story.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Story } from './entities/story.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StoryService {

  //crea un constructor
  constructor( 
      @InjectRepository(Story)
      private storyRepository: Repository<Story>,
  ) 
  {
    
  }
 
  create(createStoryDto: CreateStoryDto) {
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

  update(id: number, updateStoryDto: UpdateStoryDto) {
    return this.storyRepository.update(id, updateStoryDto);
  }

  remove(id: number) {
    return this.storyRepository.delete(id);
  }
}
