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
        return userRepositoryManager.findOneBy({ id });
    }

    static findByEmail(email: string) {
        return userRepositoryManager.findOneBy({ email });
    }
}
