const joi = require('@hapi/joi');

const createModel = joi.object().keys({
  password: joi.string().required(),
  email: joi.string().email().required(),
  name: joi.string(),
  webSite: joi.string(),
  menu: joi.array(),
  createDate: joi.date(),
  deleteDate: joi.date(),
  stock: joi.array(),
});

const updateModel = joi.object().keys({
  password: joi.string().required(),
  email: joi.string().email().required(),
  name: joi.string(),
  webSite: joi.string(),
  menu: joi.array(),
  deleteDate: joi.date(),
  stock: joi.array(),
});

module.exports = {
  createModel,
  updateModel,
};
