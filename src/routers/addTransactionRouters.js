import { Router } from "express";
import { addTransactionMiddleware } from "../middlewares/addTransactionMiddleware.js";
import { addTransationController } from "../controllers/addTransactionController.js";
const addTransactionRouter = Router();

addTransactionRouter.post('/', addTransactionMiddleware, addTransationController);

export default addTransactionRouter;