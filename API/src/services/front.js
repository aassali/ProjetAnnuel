const { Router } = require('express');
const userFindOneById = require('../modules/users/services/findOneById');
const userCreateOne = require('../modules/users/services/createOne');
const userFind = require('../modules/users/services/find');
const adminFindOneById = require('../modules/admins/services/findOneById');
const adminCreateOne = require('../modules/admins/services/createOne');
const adminFind = require('../modules/admins/services/find');
const barFindOneById = require('../modules/bars/services/findOneById');
const barCreateOne = require('../modules/bars/services/createOne');
const barFind = require('../modules/bars/services/find');
const orderFindOneById = require('../modules/orders/services/findOneById');
const orderCreateOne = require('../modules/orders/services/createOne');
const orderFind = require('../modules/orders/services/find');
const drinkFindOneById = require('../modules/drinks/services/findOneById');
const drinkCreateOne = require('../modules/drinks/services/createOne');
const drinkFind = require('../modules/drinks/services/find');
const productFindOneById = require('../modules/products/services/findOneById');
const productCreateOne = require('../modules/products/services/createOne');
const productFind = require('../modules/products/services/find');

const router = new Router();

router.get('/users', (req, res, next) => {
  userFind()
    .then((users) => {
      res.render('users', { users });
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/users/create', (req, res) => {
  res.render('createUser');
});

router.post('/users/created', (req, res, next) => {
  const userToCreate = req.body;
  console.log(userToCreate);

  userCreateOne(userToCreate)
    .then((user) => {
      res.render('userCreated', { user });
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/users/:userId', (req, res, next) => {
  const {
    userId,
  } = req.params;

  userFindOneById(userId)
    .then((user) => {
      res.render('user', { user });
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/admins', (req, res, next) => {
  adminFind()
    .then((admins) => {
      res.render('admins', { admins });
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/admins/create', (req, res) => {
  res.render('createAdmin');
});

router.post('/admins/created', (req, res, next) => {
  const adminToCreate = req.body;

  adminCreateOne(adminToCreate)
    .then((admin) => {
      res.render('adminCreated', { admin });
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/admins/:adminId', (req, res, next) => {
  const {
    adminId,
  } = req.params;

  adminFindOneById(adminId)
    .then((admin) => {
      res.render('admin', { admin });
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/bars', (req, res, next) => {
  barFind()
    .then((bars) => {
      res.render('bars', { bars });
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/bars/create', (req, res) => {
  res.render('createBar');
});

router.post('/bars/created', (req, res, next) => {
  const barToCreate = req.body;

  barCreateOne(barToCreate)
    .then((bar) => {
      res.render('barCreated', { bar });
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/bars/:barId', (req, res, next) => {
  const {
    barId,
  } = req.params;

  barFindOneById(barId)
    .then((bar) => {
      res.render('bar', { bar });
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/orders', (req, res, next) => {
  orderFind()
    .then((orders) => {
      res.render('orders', { orders });
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/orders/create', (req, res) => {
  res.render('createOrder');
});

router.post('/orders/created', (req, res, next) => {
  const orderToCreate = req.body;

  orderCreateOne(orderToCreate)
    .then((order) => {
      res.render('orderCreated', { order });
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/orders/:orderId', (req, res, next) => {
  const {
    orderId,
  } = req.params;

  orderFindOneById(orderId)
    .then((order) => {
      res.render('order', { order });
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/drinks', (req, res, next) => {
  drinkFind()
    .then((drinks) => {
      res.render('drinks', { drinks });
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/drinks/create', (req, res) => {
  res.render('createDrink');
});

router.post('/drinks/created', (req, res, next) => {
  const drinkToCreate = req.body;

  drinkCreateOne(drinkToCreate)
    .then((drink) => {
      res.render('drinkCreated', { drink });
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/drinks/:drinkId', (req, res, next) => {
  const {
    drinkId,
  } = req.params;

  drinkFindOneById(drinkId)
    .then((drink) => {
      res.render('drink', { drink });
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/products', (req, res, next) => {
  productFind()
    .then((products) => {
      res.render('products', { products });
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/products/create', (req, res) => {
  res.render('createProduct');
});

router.post('/products/created', (req, res, next) => {
  const productToCreate = req.body;

  productCreateOne(productToCreate)
    .then((product) => {
      res.render('productCreated', { product });
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/products/:productId', (req, res, next) => {
  const {
    productId,
  } = req.params;

  productFindOneById(productId)
    .then((product) => {
      res.render('product', { product });
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
