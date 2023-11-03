import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { User2 } from "./user2";


@Entity()
export class Meeting {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    zoomUrl: string;

    @ManyToMany(() => User2, user => user.meetings)
    attendees: User2[];
}