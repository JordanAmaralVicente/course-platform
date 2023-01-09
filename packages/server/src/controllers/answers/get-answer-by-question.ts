import { Request, Response } from "express";
import { getAnswer } from "../../usecases/answers/get-answer";

export async function getAnswerByQuestionController(
    req: Request,
    res: Response,
) {
    const questionId = req.params.questionId;

    const result = getAnswer(questionId);

    return res.json(result);
}
