import { NextFunction, Request, Response } from "express";
import { HTTP_STATUSES } from "../types";
import { verifyJWT } from "../utils/jwt";

export function teacherAuthorizationMiddleware(
    req: Request,
    res: Response,
    next: NextFunction,
) {
    const authHeader = req.headers.authorization;
    const token = authHeader.split(" ")[1];

    const { payload } = verifyJWT(token);

    if (payload.role !== "S") {
        return res.status(HTTP_STATUSES.FORBIDDEN).end();
    }

    next();
}
