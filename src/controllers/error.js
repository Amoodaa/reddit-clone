exports.client = (req, res) => {
  res.status(404).send('404');
};

exports.server = (err, req, res, next) => {
  console.log(err);
  res.status(500).send('Internal Server Error');
};
