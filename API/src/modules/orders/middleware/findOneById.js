const findOneById = require('../services/findOneById');

module.exports = (req, res, next) => {
  const { orderId } = req.params;
  findOneById(orderId)
    .then((order) => {
      res.json(order);
    })
    .catch((err) => {
      next(err);
    });
};
