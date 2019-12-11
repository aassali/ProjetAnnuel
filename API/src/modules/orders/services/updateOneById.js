const bcrypt = require('bcrypt');
const { ObjectId } = require('mongodb');
const { updateModel } = require('../model');
const connect = require('../../../clients/mongodb');
const collections = require('../../../enums/collections');
const findOneById = require('./findOneById');

module.exports = (id, commandeToUpdate) => {
  return updateModel.validate(commandeToUpdate)
    .then(() => {
      if (commandeToUpdate.password) {
        const commande = {
          ...commandeToUpdate,
          password: bcrypt.hashSync(commandeToUpdate.password, 10),
        };
        return commande;
      }
      return commandeToUpdate;
    })
    .then((commande) => {
      return connect()
        .then(db => db.collection(collections.COMMANDES))
        .then(collection => collection.updateOne({ _id: ObjectId(id) }, { $set: commande }))
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
