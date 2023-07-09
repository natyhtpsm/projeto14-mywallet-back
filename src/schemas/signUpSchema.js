import joi from "joi";

async function SignUpAuthMiddleware(req, res, next) {
  const {name, email, password, checkpassword} = req.body;
  const SchemaSignUp = joi.object({
      name: joi.string().min(2).max(50).required(),
      email: joi.string().email().required(),
      password: joi.string().min(3).max(20).required(),
      checkpassword: joi.ref('password'),
  })
  const validation = SchemaSignUp.validate({name, email, password, checkpassword});
  if (validation.error) {
      res.status(422).send(validation.error.details[0].message);
      return;
  }
  next();
};

export default SignUpAuthMiddleware;