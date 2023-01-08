import { Request, Response } from "express";
import { HTTP_STATUSES } from "../../types";
import { mountErrorObject } from "../../utils";

export function verifyAndUpdateUserInfoController(req: Request, res: Response) {
    if (!req?.body?.id) {
        return res
            .status(HTTP_STATUSES.BAD_REQUEST)
            .json(mountErrorObject("missing 'id' attribute"));
    }

    return res.send();
}
