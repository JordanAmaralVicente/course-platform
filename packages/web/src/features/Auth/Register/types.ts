import Joi from "joi";
import { UserRole } from "../../../types/user-role";

export interface CreateUserDTO {
  email: string;
  name: string;
  password: string;
  role: UserRole;
}

export const createUserValidation = Joi.object({
  name: Joi.string(),
  email: Joi.string().email({ tlds: { allow: false } }),
  password: Joi.string(),
  role: Joi.string(),
});
