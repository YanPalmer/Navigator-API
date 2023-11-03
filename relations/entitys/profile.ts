import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm"
import { User2 } from "./user2";

@Entity()
export class Profile {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    gender: string

    @Column()
    photo: string

    @OneToOne(() => User2, user => user.profile, {onDelete: 'CASCADE'})
    user: User2;
}