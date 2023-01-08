import { Request, Response } from "express";
import { HTTP_STATUSES } from "../../types";
import { getUpdatedUserInfo } from "../../usecases/auth/get-updated-user-info";
import { mountErrorObject } from "../../utils";

export async function verifyAndUpdateUserInfoController(
    req: Request,
    res: Response,
) {
    if (!req?.body?.id) {
        return res
            .status(HTTP_STATUSES.BAD_REQUEST)
            .json(mountErrorObject("missing 'id' attribute"));
    }

    const user = await getUpdatedUserInfo(req.body.id);

    const responseStatus = user ? HTTP_STATUSES.OK : HTTP_STATUSES.BAD_REQUEST;

    return res.status(responseStatus).json({ user });
}
