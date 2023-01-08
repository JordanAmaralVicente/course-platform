import * as Joi from "joi";
import { UserRole } from "../../types/user-role";

export const registerUserSchema = Joi.object({
    email: Joi.string().email().required(),

    name: Joi.string().required(),

    password: Joi.string().required(),

    role: Joi.string().valid(UserRole.STUDENT, UserRole.TEACHER).required(),
});
