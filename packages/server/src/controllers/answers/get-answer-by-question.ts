import { Request, Response } from "express";
import { HTTP_STATUSES } from "../../types";
import { getAnswer } from "../../usecases/answers/get-answer";

export async function getAnswerByQuestionController(
    req: Request,
    res: Response,
) {
    const questionId = req.params.questionId;

    const result = await getAnswer(questionId);

    const responseStatus = result.error
        ? HTTP_STATUSES.BAD_REQUEST
        : HTTP_STATUSES.OK;

    return res.status(responseStatus).json(result);
}
