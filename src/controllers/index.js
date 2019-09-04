// const jwt = require('express-jwt');
const router = require('express').Router();

const home = require('./home');
const comment = require('./comment');
const signup = require('./signup');
const login = require('./login');
const logout = require('./logout');
const { client, server } = require('./error');

router.get('/', home.get);
router.get('/comments', comment.getComments);
router.get('/post/:id', comment.getPostWithCommentsById);
router
  .route('/signup')
  .get(signup.get)
  .post(signup.post);
router
  .route('/login')
  .get(login.get)
  .post(login.post);
router.get('/logout', logout.get);

// router.use(jwt({ secret: process.env.JWT_KEY }));
// router.post('/postComment', comment.postComment);

router.all('*', client);
router.use(server);

module.exports = router;
