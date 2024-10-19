
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';



@Entity('news')
export class News {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable:true})
    title: string;
 
    @Column({nullable:true})
    content: string;

    @Column({nullable:true})
    comment_text: string;

    @Column({nullable:true})
    created_at: string;

    @Column({nullable:true})
    created_at_i: number;

    @Column({nullable:true})
    objectID: string;

    @Column({nullable:true})
    parent_id: number;

    @Column({nullable:true})
    story_id: number;

    @Column({nullable:true})
    story_title: string;

    @Column({nullable:true})
    story_url: string;

    @Column({nullable:true})
    updated_at: string;

    @Column({nullable:true})
    tags: string;

    @Column({nullable:true})
    url: string;


}
