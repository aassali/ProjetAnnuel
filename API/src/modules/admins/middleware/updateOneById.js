const updateOneById = require('../services/updateOneById');

module.exports = (req, res, next) => {
  const adminToUpdate = req.body;
  const { adminId } = req.params;

  updateOneById(adminId, adminToUpdate)
    .then((admin) => {
      res.json(admin);
    })
    .catch((err) => {
      next(err);
    });
};
