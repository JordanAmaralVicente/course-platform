import { User } from "../../databases/typeorm/entities/user";
import ContentRepository from "../../databases/typeorm/repositories/content";
import QuestionRepository from "../../databases/typeorm/repositories/question";
import UserRepository from "../../databases/typeorm/repositories/user";
import { mountErrorObject } from "../../utils";

const MAXIMUM_QUESTIONS_PER_CONTENT = 2;

function hasUseExceedMaximumQuestionsPerCouse(
    student: User,
    contentId: string,
) {
    if (!student?.studentQuestions?.length) {
        return false;
    }

    const questionsDoneOnCurrentContent = student.studentQuestions.reduce(
        (prev, curr) => {
            if (curr.content.id === contentId) {
                prev++;
            }

            return prev;
        },
        0,
    );

    return questionsDoneOnCurrentContent >= MAXIMUM_QUESTIONS_PER_CONTENT;
}

export const makeQuestion = async (
    text: string,
    studentId: string,
    contentId: string,
): Promise<any> => {
    const student = await UserRepository.findByIdWithRelations(studentId);

    if (!student) {
        return mountErrorObject("Aluno não encontrado");
    }

    if (hasUseExceedMaximumQuestionsPerCouse(student, contentId)) {
        return mountErrorObject(
            "O usuário já atingiu o limite de perguntas deste curso",
        );
    }

    const content = (await ContentRepository.findById(contentId))[0];

    if (!content) {
        return mountErrorObject("Conteúdo não encontrado");
    }

    try {
        return QuestionRepository.save({
            text,
            student,
            content,
        });
    } catch (error) {
        return mountErrorObject(
            "Houve um problema ao tentar registrar a pergunta, tentei mais tarde",
        );
    }
};
