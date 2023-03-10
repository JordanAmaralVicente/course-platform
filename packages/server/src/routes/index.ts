import { Router } from "express";

import { authenticationMiddleware } from "../middlewares/authentication-middleware";
import { corsMiddleware } from "../middlewares/cors";

import answerRouter from "./answer";
import authRouter from "./auth";
import contentRouter from "./content";
import questionRouter from "./question";

const router = Router();

router.use(corsMiddleware);

router.use("/auth", authRouter);
router.use("/answer", authenticationMiddleware, answerRouter);
router.use("/content", authenticationMiddleware, contentRouter);
router.use("/question", authenticationMiddleware, questionRouter);

export default router;
