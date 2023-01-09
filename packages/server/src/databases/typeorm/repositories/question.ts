import { DataBaseSource } from "../config";
import { Question } from "../entities/question";

const questionRepositoryManager = DataBaseSource.getRepository(Question);

export default class QuestionRepository {
    static findAll() {
        return questionRepositoryManager.find();
    }

    static save(question: Partial<Question>) {
        return questionRepositoryManager.save(question);
    }

    static update(id: string, question: Partial<Question>) {
        return questionRepositoryManager.update({ id }, question);
    }

    static delete(id: string) {
        return questionRepositoryManager.delete(id);
    }

    static findById(id: string) {
        return questionRepositoryManager.findOneBy({ id });
    }

    static findByContentId(contentId: string) {
        return questionRepositoryManager.find({
            where: {
                content: {
                    id: contentId,
                },
            },
        });
    }
}
