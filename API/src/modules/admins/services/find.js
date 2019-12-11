const connect = require('../../../clients/mongodb');
const collections = require('../../../enums/collections');
const deleteAdminPrivateKeys = require('../../../helpers/deleteAdminPrivateKeys');

module.exports = (first = 20, offset = 0, term) => {
  return connect()
    .then(db => db.collection(collections.ADMINS))
    .then(collection => collection.find(
      term ? { $text: { $search: term } } : null,
    ).limit(first).skip(offset))
    .then(cursor => cursor.toArray())
    .then((admins) => {
      return admins.map((admin) => {
        return deleteAdminPrivateKeys(admin);
      });
    });
};
