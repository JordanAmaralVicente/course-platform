import { Request, Response } from "express";
import { getQuestionsByContent } from "../../usecases/questions/get-questions-by-content";

export async function getQuestionsByContentIdController(
    req: Request,
    res: Response,
) {
    const contentId = req.params.contentId;

    const result = await getQuestionsByContent(contentId);

    return res.json(result);
}
