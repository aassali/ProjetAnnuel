const joi = require('@hapi/joi');

const createModel = joi.object().keys({
  libelle: joi.string().required(),
  stock: joi.number(),
  bar: joi.string().required(),
  price: joi.number(),
  isAlcool: joi.boolean().required(),
});

const updateModel = joi.object().keys({
  libelle: joi.string(),
  stock: joi.number(),
  price: joi.number(),
});

module.exports = {
  createModel,
  updateModel,
};
