import { Router } from "express";

const SignUpRoutes = Router();

SignUpRoutes.post('/cadastro', middleware, controller);

export default SignUpRoutes;