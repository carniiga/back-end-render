import { Router } from "express";
import   * as authCtrl from "../../controllers/authControllers/authController"

export const authRouter = Router();

authRouter.post("/register" , authCtrl.registerCtrl)
authRouter.post("/login" , authCtrl.loginCtrl)
authRouter.post("/forgot-password", authCtrl.forgotPasswordCtrl)
authRouter.post("/restore-password/:userId", authCtrl.restorePasswordCtrl)

