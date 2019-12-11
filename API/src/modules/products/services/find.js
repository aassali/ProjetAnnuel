const connect = require('../../../clients/mongodb');
const collections = require('../../../enums/collections');
const deleteProductPrivateKeys = require('../../../helpers/deleteProductPrivateKeys');

module.exports = (first = 20, offset = 0, term) => {
  return connect()
    .then(db => db.collection(collections.PRODUCTS))
    .then(collection => collection.find(
      term ? { $text: { $search: term } } : null,
    ).limit(first).skip(offset))
    .then(cursor => cursor.toArray())
    .then((products) => {
      return products.map((product) => {
        return deleteProductPrivateKeys(product);
      });
    });
};
