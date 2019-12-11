const bcrypt = require('bcrypt');
const { ObjectId } = require('mongodb');
const { updateModel } = require('../model');
const connect = require('../../../clients/mongodb');
const collections = require('../../../enums/collections');
const findOneById = require('./findOneById');

module.exports = (id, adminToUpdate) => {
  return updateModel.validate(adminToUpdate)
    .then(() => {
      if (adminToUpdate.password) {
        const admin = {
          ...adminToUpdate,
          password: bcrypt.hashSync(adminToUpdate.password, 10),
        };
        return admin;
      }
      return adminToUpdate;
    })
    .then((admin) => {
      return connect()
        .then(db => db.collection(collections.ADMINS))
        .then(collection => collection.updateOne({ _id: ObjectId(id) }, { $set: admin }))
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
