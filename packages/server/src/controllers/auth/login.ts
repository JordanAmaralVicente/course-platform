import { Request, Response } from "express";
import { HTTP_STATUSES } from "../../types";
import { doLogin } from "../../usecases/auth/do-login";
import { mountErrorObject } from "../../utils";
import { createJWT } from "../../utils/jwt";
import { loginSchema } from "../schemas/login";

export async function loginController(req: Request, res: Response) {
    const { error, value } = loginSchema.validate(req.body);

    if (error) {
        return res.status(HTTP_STATUSES.BAD_REQUEST).json(error);
    }

    const user = await doLogin(value.email, value.password);

    if (!user) {
        return res
            .status(HTTP_STATUSES.BAD_REQUEST)
            .json(mountErrorObject("Couldn't do login"));
    }

    return res.json({
        access_token: createJWT(user),
        user,
    });
}
