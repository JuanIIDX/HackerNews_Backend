import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity( 'stories' )
export class Story {
    @PrimaryGeneratedColumn()
    id: number;

    @Column( { nullable: true } )
    title: string;

    @Column( { nullable: true } )
    content: string;

}
