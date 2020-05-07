const env = {
  PORT: process.env.PORT || 8080,
  DATABASE_NAME: process.env.DATABASE_NAME || 'nodemysql',
  DATABASE_USERNAME: process.env.DATABASE_USERNAME || 'root',
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD || 'test',
  DATABASE_DIALECT: process.env.DATABASE_DIALECT || 'mysql',
  DATABASE_HOST: process.env.DATABASE_HOST || 'localhost',
};

module.exports = env;
