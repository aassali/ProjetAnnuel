const { createModel } = require('../model');
const connect = require('../../../clients/mongodb');
const collections = require('../../../enums/collections');

module.exports = (orderToCreate) => {
  return createModel.validate(orderToCreate)
    .then(() => {
      const order = {
        ...orderToCreate,
      };
      return order;
    })
    .then((order) => {
          return connect()
            .then(db => db.collection(collections.ORDERS))
            .then(collection => collection.insertOne(order))
        });

}
