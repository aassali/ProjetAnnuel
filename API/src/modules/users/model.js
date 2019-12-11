const joi = require('@hapi/joi');

const createModel = joi.object().keys({
  password: joi.string().required(),
  email: joi.string().email().required(),
  pseudo: joi.string().empty(''),
  age: joi.number().required(),
  previousOrders: joi.array().required(),
  createDate: joi.date().required(),
  deleteDate: joi.date(),
});

const updateModel = joi.object().keys({
  password: joi.string(),
  email: joi.string().email(),
  pseudo: joi.string(),
  deleteDate: joi.date(),
  previousOrders: joi.array(),
});

module.exports = {
  createModel,
  updateModel,
};
