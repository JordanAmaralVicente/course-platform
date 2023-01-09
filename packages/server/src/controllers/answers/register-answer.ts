import { Request, Response } from "express";
import { HTTP_STATUSES } from "../../types";
import { registerAnswer } from "../../usecases/answers/register-answer";
import { registerAnswerSchema } from "../schemas/register-answert";

export async function registerAnswerController(req: Request, res: Response) {
    const { error, value } = registerAnswerSchema.validate(req.body);

    if (error) {
        return res.status(HTTP_STATUSES.BAD_REQUEST).json(error);
    }

    const result = await registerAnswer(
        value.text,
        value.teacherId,
        value.questionId,
    );

    const responseStatus = result?.error
        ? HTTP_STATUSES.BAD_REQUEST
        : HTTP_STATUSES.CREATED;

    return res.status(responseStatus).json(result);
}
