import UserRepository from "../../databases/typeorm/repositories/user";
import { checkPassword } from "../../utils/bcrypt";

export const doLogin = async (email: string, pass: string) => {
    const user = await UserRepository.findByEmail(email);

    if (!user) return null;

    const isSamePassword = await checkPassword(pass, user.password);

    if (isSamePassword) {
        const { password, ...result } = user;
        return result;
    }

    return null;
};
