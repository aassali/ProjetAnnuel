const { ObjectId } = require('mongodb');
const connect = require('../../../clients/mongodb');
const collections = require('../../../enums/collections');
const deleteBarPrivateKeys = require('../../../helpers/deleteBarPrivateKeys');

module.exports = (id) => {
  return connect()
    .then(db => db.collection(collections.BARS))
    .then(collection => collection.findOne({ _id: ObjectId(id) }))
    .then((bar) => {
      if (bar) {
        return deleteBarPrivateKeys(bar);
      }

      const err = new Error(`List not found for id: ${id}`);
      err.name = 'Not Found';
      err.status = 404;
      throw err;
    });
};
