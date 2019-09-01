const yup = require('yup');

const signupSchema = yup.object({
  username: yup
    .string()
    .min(2)
    .max(30)
    .required(),
  password: yup
    .string()
    .matches(/^[a-zA-Z0-9]{8,30}$/)
    .required(),
  confirmPassword: yup.ref('password'),
  email: yup
    .string()
    .email()
    .required()
});

exports.signup = signupData => signupSchema.validate(signupData);
