const { sign } = require('jsonwebtoken');
const { compare } = require('bcrypt');
const { user } = require('../models/queries');
/**
 * @returns {Promise <string>} jwt token
 *  */
exports.login = userData => {
  const { username, password } = userData;
  let id;
  return user
    .find(username)
    .then(result => result.rows[0])
    .then(foundUser => {
      id = foundUser.id;
      return compare(password, foundUser.password);
    })
    .then(isValidPass => {
      if (isValidPass) return sign({ id, username }, process.env.JWT_KEY);
      throw Error('invalid password');
    });
};
