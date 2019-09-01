const commentQueries = require('../models/queries/comment');
const { formatData } = require('../helpers');
const validation = require('../validation');

exports.getComments = (req, res, next) =>
  commentQueries
    .getComments()
    .then(result => result.rows)
    .then(formatData)
    .then(result => res.json(result))
    .catch(next);

// get post with children comments
exports.getPostWithCommentsById = (req, res, next) => {
  const { id } = req.params;
  Promise.all([commentQueries.getPostById(id), commentQueries.getCommentsByParentId(id)])
    .then(result => [...result[0].rows, ...result[1].rows])
    .then(formatData)
    .then(result => res.json(result))
    .catch(next);
};

exports.postComment = (req, res, next) => {
  console.log(req.body);
  validation
    .comment(req.body)
    .then(validComment => {
      // console.log(validComment);
      if (validComment) {
        const { content, parentPost, parentComment } = validComment;
        // const { userId } = req.user;, userId

        commentQueries.insert({ content, parentPost, parentComment, userId: 1 });
      }
    })
    .catch(err => {
      console.log(err);
      next(err);
    });
};
