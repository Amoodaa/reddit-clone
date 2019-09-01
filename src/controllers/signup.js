const { hash } = require('bcrypt');
const validation = require('../validation');
const { user } = require('../models/queries');
const { login } = require('../auth/login');

exports.get = (req, res, next) => {
  // res.
};
exports.post = (req, res, next) => {
  const { username, password, confirmPassword, email } = req.body;

  validation
    .signup({ email, username, password, confirmPassword })
    // make sure username is unique errmsg
    .then(() => user.find(username))
    .then(result => {
      if (result.rows.length !== 0) throw Error('username exists');
    })
    .then(() => hash(password, 10))
    .then(hashed => user.insert({ email, username, password: hashed }))
    .then(() => login(username, password))
    .then(() => res.redirect('/'))
    .catch(next);
};
