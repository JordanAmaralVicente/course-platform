import { Router } from "express";
import { teacherAuthorizationMiddleware } from "../middlewares/teacher-authorization-middleware";

const router = Router();

router.put("/register", teacherAuthorizationMiddleware);

export default router;
