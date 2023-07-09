import { Router } from "express";
import { signUpMiddleware } from "../middlewares/signUpMiddle.js";
import { signUpController } from "../controllers/signUpController.js";
const SignUpRoutes = Router();

SignUpRoutes.post('/cadastro', signUpMiddleware, signUpController);

export default SignUpRoutes;