const deleteOneById = require('../services/deleteOneById');

module.exports = (req, res, next) => {
  const { orderId } = req.params;

  deleteOneById(orderId)
    .then((order) => {
      res.json(order);
    })
    .catch((err) => {
      next(err);
    });
};
