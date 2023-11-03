import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User2 } from "./user2";


@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(() => User2, user => user.tasks, {onDelete: 'SET NULL'})
    user: User2
}