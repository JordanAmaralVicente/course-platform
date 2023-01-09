import { Request, Response } from "express";
import { HTTP_STATUSES } from "../../types";
import { getUpdatedUserInfo } from "../../usecases/auth/get-updated-user-info";
import { mountErrorObject } from "../../utils";
import { parseAuthTokenAndVerify } from "../../utils/jwt";

export async function verifyAndUpdateUserInfoController(
    req: Request,
    res: Response,
) {
    const accessToken = req.headers.authorization;
    const { payload } = parseAuthTokenAndVerify(accessToken);

    try {
        const user = await getUpdatedUserInfo(payload.id);
        return res.json({ user });
    } catch (error) {
        return res
            .status(HTTP_STATUSES.BAD_REQUEST)
            .json(mountErrorObject("Couldn't find user"));
    }
}
