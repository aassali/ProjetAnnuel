const connect = require('../../../clients/mongodb');
const collections = require('../../../enums/collections');
const deleteDrinkPrivateKeys = require('../../../helpers/deleteDrinkPrivateKeys');

module.exports = (first = 20, offset = 0, term) => {
  return connect()
    .then(db => db.collection(collections.DRINKS))
    .then(collection => collection.find(
      term ? { $text: { $search: term } } : null,
    ).limit(first).skip(offset))
    .then(cursor => cursor.toArray())
    .then((drinks) => {
      return drinks.map((drink) => {
        return deleteDrinkPrivateKeys(drink);
      });
    });
};
