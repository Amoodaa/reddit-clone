INSERT INTO clone_user (username, PASSWORD, email)
  VALUES ('amoodaa', '1234', 'amoodaa@gmail.com');

INSERT INTO clone_comment (content, parent_post, parent_comment, user_id)
  VALUES ('parent 1', NULL, NULL, 1), ('parent 2', NULL, NULL, 1), ('child tier 1', 2, 2, 1), ('child tier 1', 2, 2, 1), ('child tier 1', 2, 2, 1), ('child tier 1', 1, 1, 1), ('child tier 2', 2, 3, 1), ('child tier 2', 2, 4, 1), ('child tier 2', 2, 3, 1), ('child tier 2', 2, 4, 1);

