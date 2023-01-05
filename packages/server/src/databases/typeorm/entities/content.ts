import {
    Column,
    Entity,
    JoinColumn,
    JoinTable,
    ManyToMany,
    ManyToOne,
    PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./user";

@Entity("contents")
export class Content {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    title: string;

    @Column()
    duration: number;

    @ManyToOne(() => User)
    @JoinColumn({ name: "teacher_fk" })
    teacher: User;

    @ManyToMany(() => User, (user) => user.studentContents)
    @JoinTable({
        name: "contents_users",
        joinColumn: {
            name: "content_fk",
        },
        inverseJoinColumn: {
            name: "user_fk",
        },
    })
    students?: User[];
}
