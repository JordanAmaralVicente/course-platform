import { NextFunction, Request, Response } from "express";
import { HTTP_STATUSES } from "../types";
import { verifyJWT } from "../utils/jwt";

export function authenticationMiddleware(
    req: Request,
    res: Response,
    next: NextFunction,
) {
    if (req.method === "OPTIONS" || req.method === "HEAD") {
        next();
    }

    const authHeader = req.headers.authorization;

    if (authHeader && authHeader.startsWith("Bearer ")) {
        const token = authHeader.split(" ")[1];
        const { isValid } = verifyJWT(token);

        if (isValid) {
            next();
        } else {
            res.status(HTTP_STATUSES.UNAUTHORIZED).end();
        }
    } else {
        res.status(HTTP_STATUSES.UNAUTHORIZED).end();
    }
}
