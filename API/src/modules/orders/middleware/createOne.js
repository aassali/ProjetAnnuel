const createOne = require('../services/createOne');

module.exports = (req, res, next) => {
  const orderToCreate = req.body;

  console.log(orderToCreate);

  createOne(orderToCreate)
    .then((order) => {
      res.json(order);
    })
    .catch((err) => {
      next(err);
    });
};
