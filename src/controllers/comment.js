const { getComments, getCommentsByParentId, getPostById } = require('../models/queries/comment');
const { formatData } = require('../helpers');

exports.getComments = (req, res, next) =>
  getComments()
    .then(result => result.rows)
    .then(formatData)
    .then(result => res.json(result))
    .catch(next);

// get post with children comments
exports.getPostWithCommentsById = (req, res, next) => {
  const { id } = req.params;
  Promise.all([getPostById(id), getCommentsByParentId(id)])
    .then(result => [...result[0].rows, ...result[1].rows])
    .then(formatData)
    .then(result => res.json(result))
    .catch(next);
};
