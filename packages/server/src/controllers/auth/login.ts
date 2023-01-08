import { Request, Response } from "express";
import { HTTP_STATUSES } from "../../types";
import { mountErrorObject } from "../../utils";

export function loginController(req: Request, res: Response) {
    if (!req?.body?.email || !req?.body?.password) {
        return res
            .status(HTTP_STATUSES.BAD_REQUEST)
            .json(
                mountErrorObject("missing data: 'email' & 'password' required"),
            );
    }

    return res.send();
}
