import { NextFunction, Request, Response } from "express";
import { User } from "../databases/typeorm/entities/user";
import { HTTP_STATUSES } from "../types";
import { UserRole } from "../types/user-role";
import { verifyJWT } from "../utils/jwt";

export function studentAuthorizationMiddleware(
    req: Request,
    res: Response,
    next: NextFunction,
) {
    const authHeader = req.headers.authorization;
    const token = authHeader.split(" ")[1];

    const { payload } = verifyJWT(token);

    const parsedPayload = payload as User;

    if (parsedPayload.role !== UserRole.STUDENT) {
        return res.status(HTTP_STATUSES.FORBIDDEN).end();
    }

    next();
}
