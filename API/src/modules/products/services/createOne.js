const { createModel } = require('../model');
const connect = require('../../../clients/mongodb');
const collections = require('../../../enums/collections');

module.exports = (productToCreate) => {
  return createModel.validate(productToCreate)
    .then(() => {
      const product = {
        ...productToCreate,
      };
      return product;
    })
    .then((product) => {

          return connect()
            .then(db => db.collection(collections.PRODUCTS))
            .then(collection => collection.insertOne(product))
        });
}