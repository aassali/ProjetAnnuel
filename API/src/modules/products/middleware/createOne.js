const createOne = require('../services/createOne');

module.exports = (req, res, next) => {
  const productToCreate = req.body;

  console.log(productToCreate);

  createOne(productToCreate)
    .then((product) => {
      res.json(product);
    })
    .catch((err) => {
      next(err);
    });
};
