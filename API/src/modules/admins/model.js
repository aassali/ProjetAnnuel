const joi = require('@hapi/joi');

const createModel = joi.object().keys({
  password: joi.string().required(),
  email: joi.string().email().required(),
  createDate: joi.date(),
  deleteDate: joi.date(),
});

const updateModel = joi.object().keys({
  password: joi.string().required(),
  email: joi.string().email().required(),
  deleteDate: joi.date(),
});

module.exports = {
  createModel,
  updateModel,
};
