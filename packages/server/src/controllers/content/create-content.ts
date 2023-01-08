import { Request, Response } from "express";
import { HTTP_STATUSES } from "../../types";
import { createContent } from "../../usecases/content/create-content";
import { createContentSchema } from "../schemas/create-content";

export async function createContentController(req: Request, res: Response) {
    const { error, value } = createContentSchema.validate(req.body);

    if (error) {
        return res.status(HTTP_STATUSES.BAD_REQUEST).json(error);
    }

    const { teacherId, ...rest } = value;

    const result = await createContent(rest, teacherId);

    const responseStatus = result.error
        ? HTTP_STATUSES.BAD_REQUEST
        : HTTP_STATUSES.CREATED;

    return res.status(responseStatus).json(result);
}
