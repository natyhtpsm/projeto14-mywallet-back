import { signInSchema } from "../schemas/signInSchema.js";
import { userExists } from "../repository/signUpRepository.js";
import bcrypt from "bcrypt";

export async function signInMiddleware(req, res, next) {
    const { email, password } = req.body;
    const user = await userExists(email);
    const schemaValidation = signInSchema.validate(email);
    if (!schemaValidation){
        return res.sendStatus(422);
    }
    if (!user) { return res.sendStatus(404); }
    const passwordOk = bcrypt.compareSync(password, user.password);
    if (!passwordOk) return res.status(401).send("Senha incorreta");
    next();
}