BEGIN;
DROP TABLE IF EXISTS clone_user, clone_comment;
CREATE TABLE clone_user (
    id SERIAL PRIMARY KEY,
    username VARCHAR(30) NOT NULL,
    PASSWORD VARCHAR NOT NULL,
    email VARCHAR NOT NULL
);
CREATE TABLE clone_comment (
    id SERIAL PRIMARY KEY,
    content VARCHAR(30) NOT NULL,
    votes INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMPTZ NOT NULL,
    parent_post INTEGER REFERENCES clone_comment (id),
    parent_comment INTEGER REFERENCES clone_comment (id),
    user_id INTEGER REFERENCES clone_user (id) NOT NULL
);
COMMIT;

