import { Router } from "express";

import * as AuthController from "../controllers/auth";
import { authenticationMiddleware } from "../middlewares/authentication-middleware";

const router = Router();

router.post("/login", AuthController.login);
router.post(
    "/verify",
    authenticationMiddleware,
    AuthController.verifyAndUpdateUserInfo,
);

export default router;
