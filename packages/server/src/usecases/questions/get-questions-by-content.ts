import { Question } from "../../databases/typeorm/entities/question";
import QuestionRepository from "../../databases/typeorm/repositories/question";

export const getQuestionsByContent = async (
    contentId: string,
): Promise<Question[]> => {
    return QuestionRepository.findByContentId(contentId);
};
