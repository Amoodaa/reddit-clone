const { join } = require('path');
const { login } = require('../auth/login');

exports.get = (req, res) => {
  if (req.cookies.token) res.redirect('/');
  else res.sendFile(join(__dirname, '..', '..', 'public', 'html', 'login.html'));
};
exports.post = (req, res, next) => {
  // console.log('req.body:', req.body);
  const { username, password } = req.body;
  login({ username, password }, next)
    .then(jwtToken => res.cookie('token', jwtToken))
    .then(() => res.redirect('/'))
    .catch(err => {
      if (err.name === 'TypeError') res.send('user does not exist');
      else next(err);
    });
};
