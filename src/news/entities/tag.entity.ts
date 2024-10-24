import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { News } from './news.entity';

@Entity('tags')
export class Tag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name_tag: string;

  @ManyToOne(() => News, (news) => news.tags)
  news: News;
}