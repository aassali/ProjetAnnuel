const { createModel } = require('../model');
const connect = require('../../../clients/mongodb');
const collections = require('../../../enums/collections');

module.exports = (drinkToCreate) => {
  return createModel.validate(drinkToCreate)
    .then(() => {
      const drink = {
        ...drinkToCreate,
      };
      return drink;
    })
    .then((drink) => {
      return connect()
            .then(db => db.collection(collections.DRINKS))
            .then(collection => collection.insertOne(drink))
        });
}
