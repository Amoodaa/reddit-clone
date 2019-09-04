const { join } = require('path');
const { hash } = require('bcrypt');
const validation = require('../validation');
const { user } = require('../models/queries');
const { login } = require('../auth/login');

exports.get = (req, res, next) => {
  if (req.cookies.token) res.redirect('/');
  else res.sendFile(join(__dirname, '..', '..', 'public', 'html', 'signup.html'));
};

exports.post = (req, res, next) => {
  const { username, password, confirmPassword, email } = req.body;

  validation
    .signup({ username, password, confirmPassword, email })
    // make sure username is unique errmsg
    .then(() => user.find(username))
    .then(result => {
      if (result.rows.length !== 0) throw Error('username exists');
    })
    .then(() => hash(password, 10))
    .then(hashed => user.insert({ email, username, password: hashed }))
    .then(() => login({ username, password }))
    .then(jwtToken => res.cookie('token', jwtToken))
    .then(() => res.redirect('/'))
    .catch(err => {
      console.log(err.message);
      if (err.message === 'username exists') res.status(400).send('username exists');
      else if (err.message === 'invalid password') res.status(400).send('invalid password');
      else next(err);
    });
};
