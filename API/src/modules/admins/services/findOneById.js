const { ObjectId } = require('mongodb');
const connect = require('../../../clients/mongodb');
const collections = require('../../../enums/collections');
const deleteAdminPrivateKeys = require('../../../helpers/deleteAdminPrivateKeys');

module.exports = (id) => {
  return connect()
    .then(db => db.collection(collections.ADMINS))
    .then(collection => collection.findOne({ _id: ObjectId(id) }))
    .then((admin) => {
      if (admin) {
        return deleteAdminPrivateKeys(admin);
      }

      const err = new Error(`List not found for id: ${id}`);
      err.name = 'Not Found';
      err.status = 404;
      throw err;
    });
};
