import { Request, Response } from "express";
import { HTTP_STATUSES } from "../../types";
import { makeQuestion } from "../../usecases/questions/make-question";
import { mountErrorObject } from "../../utils";
import { makeQuestionSchema } from "../schemas/make-question";

export async function makeQuestionController(req: Request, res: Response) {
    const { error, value } = makeQuestionSchema.validate(req.body);

    if (error) {
        return res
            .status(HTTP_STATUSES.BAD_REQUEST)
            .json(
                mountErrorObject(
                    "Informações necessárias não foram fornecidas",
                ),
            );
    }

    const result = await makeQuestion(
        value.text,
        value.studentId,
        value.contentId,
    );

    const responseStatus = result?.error
        ? HTTP_STATUSES.BAD_REQUEST
        : HTTP_STATUSES.CREATED;

    return res.status(responseStatus).json(result);
}
