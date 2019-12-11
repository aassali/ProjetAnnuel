const { ObjectId } = require('mongodb');
const connect = require('../../../clients/mongodb');
const collections = require('../../../enums/collections');
const deleteDrinkPrivateKeys = require('../../../helpers/deleteDrinkPrivateKeys');

module.exports = (id) => {
  return connect()
    .then(db => db.collection(collections.DRINKS))
    .then(collection => collection.findOne({ _id: ObjectId(id) }))
    .then((drink) => {
      if (drink) {
        return deleteDrinkPrivateKeys(drink);
      }

      const err = new Error(`List not found for id: ${id}`);
      err.name = 'Not Found';
      err.status = 404;
      throw err;
    });
};
