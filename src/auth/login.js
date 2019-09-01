const { sign } = require('jsonwebtoken');
const { compare } = require('bcrypt');
const { user } = require('../models/queries');
/**
 * @returns {string} jwt token
 *  */
exports.login = userData => {
  const { username, password } = userData;
  let id;
  user
    .find(username)
    .then(result => result.rows[0])
    .then(foundUser => {
      id = foundUser.id;
      return compare(password, foundUser.password);
    })
    .then(isValidPass => {
      if (isValidPass) return sign({ id, username });
      throw Error('invalid password');
    });
};
