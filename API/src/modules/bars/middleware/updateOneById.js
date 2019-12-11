const updateOneById = require('../services/updateOneById');

module.exports = (req, res, next) => {
  const barToUpdate = req.body;
  const { barId } = req.params;

  updateOneById(barId, barToUpdate)
    .then((bar) => {
      res.json(bar);
    })
    .catch((err) => {
      next(err);
    });
};
