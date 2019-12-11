const config = require('config');
const { MongoClient } = require('mongodb');

const {
  url,
  name,
} = config.get('database');

MongoClient.connect(url, (err, client) => {
  if (err) throw err;

  client.db(name)
    .then(() => client.close())
    .catch((error) => {
      client.close();

      console.error(error); // eslint-disable-line no-console
    });
});
