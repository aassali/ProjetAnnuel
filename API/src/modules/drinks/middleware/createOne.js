const createOne = require('../services/createOne');

module.exports = (req, res, next) => {
  const drinkToCreate = req.body;

  console.log(drinkToCreate);

  createOne(drinkToCreate)
    .then((drink) => {
      res.json(drink);
    })
    .catch((err) => {
      next(err);
    });
};
