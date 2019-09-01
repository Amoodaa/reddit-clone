const router = require('express').Router();

const { client, server } = require('./error');
const comment = require('./comment');

router.get('/comments', comment.getComments);
// (req, res) => {
//   res.send('hi');
// });
router.get('/post/:id', comment.getPostWithCommentsById);
router.all('*', client);
// router.use(server);

module.exports = router;
