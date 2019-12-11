const updateOneById = require('../services/updateOneById');

module.exports = (req, res, next) => {
  const productToUpdate = req.body;
  const { productId } = req.params;

  updateOneById(productId, productToUpdate)
    .then((product) => {
      res.json(product);
    })
    .catch((err) => {
      next(err);
    });
};
