
import { Entity, PrimaryGeneratedColumn, Column , OneToMany } from 'typeorm';
import { Comment } from './comment.entity';
import { Tag } from './tag.entity';



@Entity('news')
export class News {  @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    author: string;
  
    @Column('text')
    comment_text: string;
  
    @Column()
    created_at: Date;
  
    @Column('bigint')
    created_at_i: number;
  
    @Column()
    objectID: string;
  
    @Column({ nullable: true })
    parent_id: string;
  
    @Column()
    story_id: string;
  
    @Column()
    story_title: string;
  
    @Column()
    story_url: string;
  
    @Column()
    updated_at: Date;

    @OneToMany(() => Tag, (tag) => tag.news)
    tags: Tag[];
  
    @OneToMany(() => Comment, (comment) => comment.news)
    comments: Comment[];


}
