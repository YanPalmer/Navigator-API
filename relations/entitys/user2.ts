import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToOne,
    JoinColumn,
    OneToMany,
    ManyToOne,
    ManyToMany,
    JoinTable,
} from "typeorm"
import { Profile } from "./profile"
import { Task } from "./task"
import { Meeting } from "./meeting"

@Entity()
export class User2 {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @ManyToOne(() => User2, user => user.directReports, {onDelete: 'SET NULL'})
    manager: User2

    @OneToMany(() => User2, user => user.manager)
    directReports: User2[];

    @OneToOne(() => Profile, profile => profile.user)
    @JoinColumn()
    profile: Profile

    @OneToMany(() => Task, tasks => tasks.user)
    tasks: Task[];

    @ManyToMany(() => Meeting, meeting => meeting.attendees)
    @JoinTable() 
    meetings: Meeting
}
