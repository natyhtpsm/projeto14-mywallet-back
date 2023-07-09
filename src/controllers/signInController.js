import { sendToken } from "../repository/signInRepository.js";
import { v4 as uuid } from "uuid";
import { userExists } from "../repository/signUpRepository.js";

export async function signInController(req, res) {
    const {email} = req.body;
    const token = uuid();
    const user = await userExists(email);
    const sendtoken =  await sendToken(token, user._id);
    if(!sendtoken){
        return res.sendStatus(422);
    }
    return res.sendStatus(200);
}