const router = require('express').Router();

// const jwt = require('express-jwt');
const { client, server } = require('./error');
const comment = require('./comment');
const signup = require('./signup');
const login = require('./login');

router.get('/comments', comment.getComments);
// (req, res) => {
//   res.send('hi');
// });
router.get('/post/:id', comment.getPostWithCommentsById);
router.post('/signup', signup.post);
router.post('/login', login.post);
// router.use(jwt({ secret: process.env.JWT_KEY }));

router.post('/postComment', comment.postComment);

router.all('*', client);
router.use(server);

module.exports = router;
