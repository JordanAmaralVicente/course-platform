import { Request, Response } from "express";
import { HTTP_STATUSES } from "../../types";
import { registerUser } from "../../usecases/auth/register-user";
import { mountErrorObject } from "../../utils";
import { registerUserSchema } from "../schemas/register-user";

export async function registerController(req: Request, res: Response) {
    const { error, value } = registerUserSchema.validate(req.body);

    if (error) {
        return res.status(HTTP_STATUSES.BAD_REQUEST).json(error);
    }

    const user = await registerUser(req.body);

    if (!user) {
        return res
            .status(HTTP_STATUSES.BAD_REQUEST)
            .json(mountErrorObject("Couldn't do login"));
    }

    return res.status(HTTP_STATUSES.CREATED).json({
        user,
    });
}
