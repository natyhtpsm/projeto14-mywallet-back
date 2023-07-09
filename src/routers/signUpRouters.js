import { Router } from "express";
import SignUpAuthMiddleware from "../middlewares/signUpMiddle";
import  SignUpController  from "../controllers/signUpController.js";

const SignUpRoutes = Router();

SignUpRoutes.post('/cadastro', SignUpAuthMiddleware, SignUpController);

export default SignUpRoutes;