const { Router } = require('express');
const findOneById = require('./middleware/findOneById');
const updateOneById = require('./middleware/updateOneById');
const find = require('./middleware/find');
const createOne = require('./middleware/createOne');
const deleteOneById = require('./middleware/deleteOneById');
const barCtrl = require('./barsCtrl')

const router = new Router();

router.route('/bars')
  .get(find)
  .post(createOne);

router.route('/bars/register').post(barCtrl.register);
router.route('/bars/login').post(barCtrl.login);

router.route('/bars/:barId')
  .get(findOneById)
  .patch(updateOneById)
  .delete(deleteOneById);


module.exports = router;
