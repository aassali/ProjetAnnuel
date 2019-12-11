const updateOneById = require('../services/updateOneById');

module.exports = (req, res, next) => {
  const orderToUpdate = req.body;
  const { orderId } = req.params;

  updateOneById(orderId, orderToUpdate)
    .then((order) => {
      res.json(order);
    })
    .catch((err) => {
      next(err);
    });
};
