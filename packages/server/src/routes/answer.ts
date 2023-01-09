import { Router } from "express";
import { teacherAuthorizationMiddleware } from "../middlewares/teacher-authorization-middleware";

import * as AnswerController from "../controllers/answers";

const router = Router();

router.get("/:questionId", AnswerController.getAnswerByQuestion);
router.put(
    "/register",
    teacherAuthorizationMiddleware,
    AnswerController.registerAnswer,
);

export default router;
