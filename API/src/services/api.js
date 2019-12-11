const { Router } = require('express');
const usersRouter = require('../modules/users/router');
const adminsRouter = require('../modules/admins/router');
const barsRouter = require('../modules/bars/router');
const ordersRouter = require('../modules/orders/router');
const drinksRouter = require('../modules/drinks/router');
const productsRouter = require('../modules/products/router');

const router = new Router();

// Service  API
router.use('/api', usersRouter);
router.use('/api', adminsRouter);
router.use('/api', barsRouter);
router.use('/api', ordersRouter);
router.use('/api', drinksRouter);
router.use('/api', productsRouter);
// End of service API

module.exports = router;
