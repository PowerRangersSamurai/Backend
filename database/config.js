
module.exports = {
    development: {
      username: 'astraxx04',
      password: 'Astraxx2542',
      database: 'myDatabase',
      host: 'users.cjgs35cvbfrq.us-east-1.rds.amazonaws.com',
      port: '5432',
      dialect: 'postgres',
      dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
      }
    },
    production: {
      // Production database configuration (if needed)
    },
};
  