const createOne = require('../services/createOne');

module.exports = (req, res, next) => {
  const adminToCreate = req.body;

  console.log(adminToCreate);

  createOne(adminToCreate)
    .then((admin) => {
      res.json(admin);
    })
    .catch((err) => {
      next(err);
    });
};
