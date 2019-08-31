exports.client = (req, res) => {
  res.status(404).send('404');
};

exports.server = (err, req, res, next) => {
  res.status(500).send(err);
};
