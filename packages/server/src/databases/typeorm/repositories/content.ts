import { DataBaseSource } from "../config";
import { Content } from "../entities/content";

const contentRepositoryManager = DataBaseSource.getRepository(Content);

export default class ContentRepository {
    static findAll() {
        return contentRepositoryManager.find({
            select: {
                students: false,
                teacher: {
                    id: true,
                    name: true,
                },
            },
            relations: ["teacher"],
        });
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
        return contentRepositoryManager.find({
            select: {
                id: true,
                duration: true,
                title: true,
                students: {
                    email: true,
                },
                teacher: {
                    id: true,
                    name: true,
                    email: true,
                },
            },
            where: {
                id,
            },
            relations: ["teacher", "students"],
        });
    }
}
