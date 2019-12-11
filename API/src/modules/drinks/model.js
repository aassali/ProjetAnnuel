const joi = require('@hapi/joi');

const createModel = joi.object().keys({
  libelle: joi.string(),
  bar: joi.string(),
  description: joi.string(),
  recipe: joi.array(),
});

const updateModel = joi.object().keys({
  libelle: joi.string(),
  description: joi.string(),
  recipe: joi.array(),
});

module.exports = {
  createModel,
  updateModel,
};
