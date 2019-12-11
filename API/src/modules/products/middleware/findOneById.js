const findOneById = require('../services/findOneById');

module.exports = (req, res, next) => {
  const { productId } = req.params;
  findOneById(productId)
    .then((product) => {
      res.json(product);
    })
    .catch((err) => {
      next(err);
    });
};
