const connection = require('../config/connection');

exports.getComments = () => {
  const sql =
    'select * from clone_comment inner join clone_user ON clone_user.id = clone_comment.user_id';
  return connection.query(sql);
};
