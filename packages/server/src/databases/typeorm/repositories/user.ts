import { UserRole } from "../../../types/user-role";
import { DataBaseSource } from "../config";
import { User } from "../entities/user";

const userRepositoryManager = DataBaseSource.getRepository(User);

export default class UserRepository {
    static findAll() {
        return userRepositoryManager.find();
    }

    static save(user: Partial<User>) {
        return userRepositoryManager.save(user);
    }

    static update(id: string, user: Partial<User>) {
        return userRepositoryManager.update({ id }, user);
    }

    static delete(id: string) {
        return userRepositoryManager.delete(id);
    }

    static findById(id: string) {
        return userRepositoryManager.findOneByOrFail({ id });
    }

    static findByEmail(email: string) {
        return userRepositoryManager.findOneBy({ email });
    }

    static findAllStudents() {
        return userRepositoryManager.findBy({
            role: UserRole.STUDENT,
        });
    }

    static findAllTeachers() {
        return userRepositoryManager.findBy({
            role: UserRole.TEACHER,
        });
    }
}
