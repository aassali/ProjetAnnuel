const bcrypt = require('bcrypt');
const { createModel } = require('../model');
const connect = require('../../../clients/mongodb');
const collections = require('../../../enums/collections');
const deleteAdminPrivateKeys = require('../../../helpers/deleteAdminPrivateKeys');
const findOneByEmail = require('./findOneByEmail');

module.exports = (adminToCreate) => {
  return createModel.validate(adminToCreate)
    .then(() => {
      const admin = {
        ...adminToCreate,
        password: bcrypt.hashSync(adminToCreate.password, 10),
      };
      return admin;
    })
    .then((admin) => {
      return findOneByEmail(admin.email)
        .catch((err) => {
          if (err.status !== 404) {
            throw err;
          }

          return connect()
            .then(db => db.collection(collections.ADMINS))
            .then(collection => collection.insertOne(admin))
            .then(dbResponse => deleteAdminPrivateKeys(dbResponse.ops[0]));
        });
    });
};
