import AnswerRepository from "../../databases/typeorm/repositories/answer";
import { mountErrorObject } from "../../utils";

export const getAnswer = async (questionId: string): Promise<any> => {
    const answer = await AnswerRepository.findByQuestionId(questionId);

    if (!answer) {
        return mountErrorObject("Não há respostas registradas para a pergunta");
    }

    return answer;
};
