const connect = require('../../../clients/mongodb');
const collections = require('../../../enums/collections');

module.exports = (email) => {
  return connect()
    .then(db => db.collection(collections.DRINKS))
    .then(collection => collection.findOne({ email }))
    .then((dbResponse) => {
      if (dbResponse) {
        return dbResponse;
      }

      const err = new Error(`List not found for email: ${email}`);
      err.name = 'Not Found';
      err.status = 404;
      throw err;
    });
};
