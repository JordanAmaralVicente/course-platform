import AnswerRepository from "../../databases/typeorm/repositories/answer";
import QuestionRepository from "../../databases/typeorm/repositories/question";
import { mountErrorObject } from "../../utils";

export const registerAnswer = async (
    answerText: string,
    teacherId: string,
    questionId: string,
): Promise<any> => {
    const question = await QuestionRepository.findById(questionId);

    if (!question.content) {
        return mountErrorObject(
            "Não foi possível encontrar o conteúdo cuja pergunta pertence",
        );
    }

    if (question.content.teacher.id !== teacherId) {
        return mountErrorObject(
            "O professor não pode responder uma pergunta de uma curso que não lhe pertence",
        );
    }

    try {
        return AnswerRepository.save({
            text: answerText,
            question,
            teacher: question.content.teacher,
        });
    } catch (error) {
        return mountErrorObject("Não foi possível registrar a resposta");
    }
};
