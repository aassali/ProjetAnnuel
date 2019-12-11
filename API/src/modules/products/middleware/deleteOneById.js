const deleteOneById = require('../services/deleteOneById');

module.exports = (req, res, next) => {
  const { productId } = req.params;

  deleteOneById(productId)
    .then((product) => {
      res.json(product);
    })
    .catch((err) => {
      next(err);
    });
};
