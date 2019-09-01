const yup = require('yup');

const commentSchema = yup.object({
  content: yup
    .string()
    .min(15)
    .required(),
  parentComment: yup
    .number()
    .integer()
    .required(),
  parentPost: yup
    .number()
    .integer()
    .required()
});

exports.comment = commentData => commentSchema.validate(commentData);
