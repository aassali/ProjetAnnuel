const deleteOneById = require('../services/deleteOneById');

module.exports = (req, res, next) => {
  const { drinkId } = req.params;

  deleteOneById(drinkId)
    .then((drink) => {
      res.json(drink);
    })
    .catch((err) => {
      next(err);
    });
};
