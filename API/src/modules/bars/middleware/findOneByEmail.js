const findOneByEmail = require('../services/findOneByEmail');

module.exports = (req, res, next) => {
  const { barEmail } = req.params;
  findOneByEmail(barEmail)
    .then((bar) => {
      res.json(bar);
    })
    .catch((err) => {
      next(err);
    });
};
