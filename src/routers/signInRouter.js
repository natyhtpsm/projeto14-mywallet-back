import { Router } from "express";
import { signInMiddleware } from "../middlewares/signInMiddleware.js";
import { signInController } from "../controllers/signInController.js";

const signInRoutes = Router();

signInRoutes.post('/', signInMiddleware, signInController);

export default signInRoutes;