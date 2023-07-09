import joi from "joi";

export const SchemaSignUp = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required(),
})
