const deleteOneById = require('../services/deleteOneById');

module.exports = (req, res, next) => {
  const { adminId } = req.params;

  deleteOneById(adminId)
    .then((admin) => {
      res.json(admin);
    })
    .catch((err) => {
      next(err);
    });
};
