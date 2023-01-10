import { User } from "../../databases/typeorm/entities/user";
import UserRepository from "../../databases/typeorm/repositories/user";
import { encryptPassword } from "../../utils/bcrypt";

export const registerUser = async (userDTO: Partial<User>): Promise<any> => {
    const { password: pass, ...rest } = userDTO;

    const hash = await encryptPassword(pass as string);
    try {
        const user = await UserRepository.save({
            ...rest,
            password: hash,
        });

        const { password, ...result } = user;
        return result;
    } catch (error) {
        return null;
    }
};
