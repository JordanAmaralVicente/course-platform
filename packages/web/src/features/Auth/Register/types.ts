import Joi from "joi";
import { UserRole } from "../../../types/user-role";

export interface CreateUserDTO {
  email: string;
  name: string;
  password: string;
  role: UserRole;
}

export const createUserValidation = Joi.object({
  name: Joi.string().required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string().required(),
  role: Joi.string().required(),
});
