import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToOne,
    PrimaryGeneratedColumn,
} from "typeorm";
import { Answer } from "./answer";
import { Content } from "./content";
import { User } from "./user";

@Entity("questions")
export class Question {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    text: string;

    @ManyToOne(() => Content)
    @JoinColumn({ name: "content_fk" })
    content: Content;

    @ManyToOne(() => User)
    @JoinColumn({ name: "user_fk" })
    student: User;

    @OneToOne(() => Answer, (answer) => answer.question)
    answer?: Answer;
}
