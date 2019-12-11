const joi = require('@hapi/joi');

const createModel = joi.object().keys({
  bar: joi.string().required(),
  user: joi.string().required(),
  createDate: joi.date().required(),
  drinks: joi.array().required(),
  validate: joi.boolean().required(),
  price: joi.number().required(),
  nbDrinks: joi.number().required(),
});

const updateModel = joi.object().keys({
  validate: joi.boolean(),
  drinks: joi.array(),
}); 

module.exports = {
  createModel,
  updateModel,
};
