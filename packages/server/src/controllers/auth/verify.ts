import { Request, Response } from "express";
import { HTTP_STATUSES } from "../../types";
import { getUpdatedUserInfo } from "../../usecases/auth/get-updated-user-info";
import { verifyJWT } from "../../utils/jwt";

export async function verifyAndUpdateUserInfoController(
    req: Request,
    res: Response,
) {
    const accessToken = req.headers.authorization;

    const { payload } = verifyJWT(accessToken);

    const user = await getUpdatedUserInfo(payload.id);

    const responseStatus = user ? HTTP_STATUSES.OK : HTTP_STATUSES.BAD_REQUEST;

    return res.status(responseStatus).json({ user });
}
