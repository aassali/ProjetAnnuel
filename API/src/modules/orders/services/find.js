const connect = require('../../../clients/mongodb');
const collections = require('../../../enums/collections');
const deleteOrderPrivateKeys = require('../../../helpers/deleteOrderPrivateKeys');

module.exports = (first = 20, offset = 0, term) => {
  return connect()
    .then(db => db.collection(collections.ORDERS))
    .then(collection => collection.find(
      term ? { $text: { $search: term } } : null,
    ).limit(first).skip(offset))
    .then(cursor => cursor.toArray())
    .then((orders) => {
      return orders.map((order) => {
        return deleteOrderPrivateKeys(order);
      });
    });
};
