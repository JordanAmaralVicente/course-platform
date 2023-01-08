import { Router } from "express";
import { studentAuthorizationMiddleware } from "../middlewares/student-authorization-middleware";

const router = Router();

router.get("/");
router.put("/create-question", studentAuthorizationMiddleware);

export default router;
