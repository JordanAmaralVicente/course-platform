import { Answer } from "../../databases/typeorm/entities/answer";
import AnswerRepository from "../../databases/typeorm/repositories/answer";

export const getAnswer = async (questionId: string): Promise<Answer> => {
    return (await AnswerRepository.findByQuestionId(questionId))[0];
};
