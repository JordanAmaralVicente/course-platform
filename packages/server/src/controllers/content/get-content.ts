import { Request, Response } from "express";

export async function getContentController(req: Request, res: Response) {
    const id = req.params.id;

    return res.json({ id });
}
