import { DataBaseSource } from "../config";
import { Content } from "../entities/content";

const contentRepositoryManager = DataBaseSource.getRepository(Content);

export default class ContentRepository {
    static findAll() {
        return contentRepositoryManager.find();
    }

    static save(content: Partial<Content>) {
        return contentRepositoryManager.save(content);
    }

    static update(id: string, content: Partial<Content>) {
        return contentRepositoryManager.update({ id }, content);
    }

    static delete(id: string) {
        return contentRepositoryManager.delete(id);
    }

    static findById(id: string) {
        return contentRepositoryManager.findOneBy({ id });
    }
}
