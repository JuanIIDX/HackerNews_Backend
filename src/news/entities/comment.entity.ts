import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { News } from './news.entity';

@Entity('comment')
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  id_author: string;

  @Column('text')
  comment_text: string;

  @Column()
  date_created: Date;

  @Column({ nullable: true })
  date_edited: Date;

  @ManyToOne(() => News, (news) => news.comments)
  news: News;
}