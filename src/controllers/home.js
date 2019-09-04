const { join } = require('path');

exports.get = (req, res) => {
  res.sendFile(join(__dirname, '..', '..', 'public', 'index.html'));
};
