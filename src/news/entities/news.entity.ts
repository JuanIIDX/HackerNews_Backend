
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('news')
export class News {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable:true})
    title: string;
 
    @Column({nullable:true})
    content: string;
}
