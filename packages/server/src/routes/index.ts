import { Router } from "express";

import { authenticationMiddleware } from "../middlewares/authentication-middleware";
import { corsMiddleware } from "../middlewares/cors";

import answerRouter from "./answer";
import contentRouter from "./content";
import questionRouter from "./question";
import userRouter from "./user";

const router = Router();

router.use(corsMiddleware);
router.use("/answer", authenticationMiddleware, answerRouter);
router.use("/content", authenticationMiddleware, contentRouter);
router.use("/question", authenticationMiddleware, questionRouter);

router.use("/user/register");

router.use("/user", authenticationMiddleware, userRouter);

export default router;
