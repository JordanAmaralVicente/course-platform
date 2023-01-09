import { Request, Response } from "express";
import { getContent } from "../../usecases/content/get-content";

export async function getContentController(req: Request, res: Response) {
    const id = req.params.id;

    const result = await getContent(id);

    return res.json(result);
}
