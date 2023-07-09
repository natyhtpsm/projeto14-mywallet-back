import bcrypt from "bcrypt";
import { signUpRepository } from "../repository/signUpRepository.js";

export async function signUpController(req, res) {
    const { name, email, password } = req.body;
    const hash = bcrypt.hashSync(password, 10);
    const result = await signUpRepository(name, email, hash);
    if(!result){ return res.sendStatus(500); }
    return res.sendStatus(201);
}