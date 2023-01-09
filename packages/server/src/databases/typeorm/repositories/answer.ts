import { DataBaseSource } from "../config";
import { Answer } from "../entities/answer";

const answerRepositoryManager = DataBaseSource.getRepository(Answer);

export default class AnswerRepository {
    static findAll() {
        return answerRepositoryManager.find();
    }

    static save(answer: Partial<Answer>) {
        return answerRepositoryManager.save(answer);
    }

    static update(id: string, answer: Partial<Answer>) {
        return answerRepositoryManager.update({ id }, answer);
    }

    static delete(id: string) {
        return answerRepositoryManager.delete(id);
    }

    static findById(id: string) {
        return answerRepositoryManager.findOneBy({ id });
    }

    static findByQuestionId(questionId: string) {
        return answerRepositoryManager.findOne({
            where: {
                question: {
                    id: questionId,
                },
            },
        });
    }
}
