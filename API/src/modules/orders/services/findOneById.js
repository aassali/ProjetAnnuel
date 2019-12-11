const { ObjectId } = require('mongodb');
const connect = require('../../../clients/mongodb');
const collections = require('../../../enums/collections');
const deleteOrderPrivateKeys = require('../../../helpers/deleteOrderPrivateKeys');

module.exports = (id) => {
  return connect()
    .then(db => db.collection(collections.ORDERS))
    .then(collection => collection.findOne({ _id: ObjectId(id) }))
    .then((order) => {
      if (order) {
        return deleteOrderPrivateKeys(order);
      }

      const err = new Error(`List not found for id: ${id}`);
      err.name = 'Not Found';
      err.status = 404;
      throw err;
    });
};
