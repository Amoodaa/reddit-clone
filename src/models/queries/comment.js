const connection = require('../config/connection');

exports.getComments = () => {
  const sql = 'select * from clone_comment';
  return connection.query(sql);
};

exports.getCommentsByParentId = id => {
  const sql = { text: 'select * from clone_comment where parent_post = $1', values: [id] };
  return connection.query(sql);
};
exports.getPostById = id => {
  const sql = {
    text: 'select * from clone_comment where id = $1',
    values: [id]
  };
  return connection.query(sql);
};
exports.insert = comment => {
  const { content, parentPost, parentComment, userId } = comment;
  const sql = {
    text:
      'INSERT INTO clone_comment (content,votes,parent_post,parent_comment,user_id) VALUES ($1,$2,$3,$4,$5) RETURNING *',
    values: [content, 0, parentPost, parentComment, userId]
  };
  return connection.query(sql);
};
