import { Router } from "express";
import { studentAuthorizationMiddleware } from "../middlewares/student-authorization-middleware";

import * as QuestionsController from "../controllers/questions";

const router = Router();

router.get("/:contentId", QuestionsController.getQuestionsByContentId);
router.put(
    "/make-question",
    studentAuthorizationMiddleware,
    QuestionsController.makeQuestion,
);

export default router;
