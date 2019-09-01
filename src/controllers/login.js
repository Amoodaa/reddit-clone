const { login } = require('../auth/login');

exports.get = (req, res, next) => {};
exports.post = (req, res, next) => {
  const { username, password } = req.body;
  login({ username, password })
    .then(jwtToken => res.cookie(jwtToken))
    .then(() => res.redirect('/'))
    .catch(next);
};
