const updateOneById = require('../services/updateOneById');

module.exports = (req, res, next) => {
  const drinkToUpdate = req.body;
  const { drinkId } = req.params;

  updateOneById(drinkId, drinkToUpdate)
    .then((drink) => {
      res.json(drink);
    })
    .catch((err) => {
      next(err);
    });
};
