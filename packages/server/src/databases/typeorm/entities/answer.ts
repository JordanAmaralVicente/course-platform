import {
    Column,
    Entity,
    JoinColumn,
    OneToOne,
    PrimaryGeneratedColumn,
} from "typeorm";
import { Question } from "./question";
import { User } from "./user";

@Entity("answers")
export class Answer {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    text: string;

    @OneToOne(() => Question)
    @JoinColumn({ name: "question_fk" })
    question: Question;

    @OneToOne(() => User)
    @JoinColumn({ name: "teacher_fk" })
    teacher: User;
}
