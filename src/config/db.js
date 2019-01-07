module.exports = {
  mongo: {
    connectionUri: process.env.MONGO_CONNECTION_URI || 'localhost',
    options: {
      user: process.env.MONGO_USER || 'root',
      pass: process.env.MONGO_PASSWORD || 'example',
      dbName: process.env.MONGO_DB || 'evidentist',
      auth: {
        authdb: process.env.MONGO_AUTHDB || 'admin',
      },
      useNewUrlParser: true,
    },
  },
};
