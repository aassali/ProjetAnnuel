const { ObjectId } = require('mongodb');
const connect = require('../../../clients/mongodb');
const collections = require('../../../enums/collections');
const deleteProductPrivateKeys = require('../../../helpers/deleteProductPrivateKeys');

module.exports = (id) => {
  return connect()
    .then(db => db.collection(collections.PRODUCTS))
    .then(collection => collection.findOne({ _id: ObjectId(id) }))
    .then((product) => {
      if (product) {
        return deleteProductPrivateKeys(product);
      }

      const err = new Error(`List not found for id: ${id}`);
      err.name = 'Not Found';
      err.status = 404;
      throw err;
    });
};
