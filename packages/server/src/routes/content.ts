import { Router } from "express";
import { teacherAuthorizationMiddleware } from "../middlewares/teacher-authorization-middleware";

import * as ContentController from "../controllers/content";

const router = Router();

router.get("/", ContentController.getContents);

router.put(
    "/create-content",
    teacherAuthorizationMiddleware,
    ContentController.createContent,
);

router.get("/:id");

export default router;
