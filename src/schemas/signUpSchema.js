import joi from "joi";

export const signUpSchema = joi.object({
    name: joi.string().min(2).max(50).required(),
    email: joi.string().email().required(),
    password: joi.string().min(3).max(20).required(),
    checkpassword: joi.ref('password'),
})