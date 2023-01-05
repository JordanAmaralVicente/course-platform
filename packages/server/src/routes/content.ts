import { Router } from "express";
import { studentAuthorizationMiddleware } from "../middlewares/student-authorization-middleware";
import { teacherAuthorizationMiddleware } from "../middlewares/teacher-authorization-middleware";

const router = Router();

router.get("/");

router.post("/register-student", studentAuthorizationMiddleware);
router.put("/create-content", teacherAuthorizationMiddleware);

router.get("/:id");

export default router;
