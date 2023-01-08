import { User } from "../../databases/typeorm/entities/user";
import UserRepository from "../../databases/typeorm/repositories/user";

export const getUpdatedUserInfo = async (
    id: string,
): Promise<Partial<User>> => {
    const user = await UserRepository.findById(id);

    if (!user) return null;

    const { password, ...rest } = user;

    return rest;
};
