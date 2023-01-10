import {
    Column,
    Entity,
    Index,
    JoinTable,
    ManyToMany,
    OneToMany,
    PrimaryGeneratedColumn,
} from "typeorm";
import { UserRole } from "../../../types/user-role";
import { Content } from "./content";
import { Question } from "./question";

@Entity("users")
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Index({ unique: true })
    @Column()
    email: string;

    @Column()
    password: string;

    @Column({
        type: "enum",
        enum: UserRole,
        default: UserRole.STUDENT,
    })
    role: UserRole;

    @OneToMany(() => Content, (content) => content.teacher)
    teacherContents?: Content[];

    @OneToMany(() => Question, (question) => question.student)
    studentQuestions?: Question[];

    @ManyToMany(() => Content, (content) => content.students)
    @JoinTable({
        name: "contents_users",
    })
    studentContents?: Content[];
}
