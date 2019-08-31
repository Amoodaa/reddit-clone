const { getComments } = require('../models/queries/comment');

exports.getComments = (req, res, next) => {
  return getComments()
    .then(result => result.rows)
    .then(result => res.json(result))
    .catch(next);
};
