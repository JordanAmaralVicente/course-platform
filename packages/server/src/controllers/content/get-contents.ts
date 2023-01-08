import { Request, Response } from "express";
import { getContents } from "../../usecases/content/get-contents";

export async function getContentsController(_: Request, res: Response) {
    const result = await getContents();

    return res.json(result);
}
