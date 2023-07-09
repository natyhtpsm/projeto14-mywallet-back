import { signUpSchema } from "../schemas/signUpSchema.js";
import { userExists } from "../repository/signUpRepository.js";

export async function signUpMiddleware(req, res, next){
    const { name, email, password, checkpassword } = req.body;
    const schemaValidation = signUpSchema.validate({ name, email, password, checkpassword });
    if(!schemaValidation){
        return res.sendStatus(422);
    }
    const exists = await userExists(email);
    console.log("USER", exists);
    if(exists){
        return res.sendStatus(409);
    }
    next();
} 