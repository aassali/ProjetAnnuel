const findOneById = require('../services/findOneById');

module.exports = (req, res, next) => {
  const { drinkId } = req.params;
  findOneById(drinkId)
    .then((drink) => {
      res.json(drink);
    })
    .catch((err) => {
      next(err);
    });
};
