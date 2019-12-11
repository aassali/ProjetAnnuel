const bcrypt = require('bcrypt');
const { ObjectId } = require('mongodb');
const { updateModel } = require('../model');
const connect = require('../../../clients/mongodb');
const collections = require('../../../enums/collections');
const findOneById = require('./findOneById');

module.exports = (id, drinkToUpdate) => {
  return updateModel.validate(drinkToUpdate)
    .then(() => {
      if (drinkToUpdate.password) {
        const drink = {
          ...drinkToUpdate,
          password: bcrypt.hashSync(drinkToUpdate.password, 10),
        };
        return drink;
      }
      return drinkToUpdate;
    })
    .then((drink) => {
      return connect()
        .then(db => db.collection(collections.DRINKS))
        .then(collection => collection.updateOne({ _id: ObjectId(id) }, { $set: drink }))
        .then((dbResponse) => {
          if (dbResponse.matchedCount === 1) {
            return findOneById(id);
          }

          const err = new Error('Not Found');
          err.status = 404;
          throw err;
        });
    });
};
