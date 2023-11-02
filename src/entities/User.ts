import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    name: string;

    @Column()
    lat: string;

    @Column()
    lon: string;

    @CreateDateColumn()
    timeSaved: Date;
}