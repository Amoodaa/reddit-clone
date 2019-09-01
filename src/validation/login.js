const yup = require('yup');

const loginSchema = yup.object({
  username: yup
    .string()
    .min(2)
    .max(30)
    .required(),
  password: yup
    .string()
    .matches(/^[a-zA-Z0-9]{8,30}$/)
    .required()
});

exports.login = loginData => loginSchema.validate(loginData);
