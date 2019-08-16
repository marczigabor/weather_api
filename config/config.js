module.exports = {
  development: {
    dialect: "sqlite",
    storage: "./db.development.sqlite"
  },
  test: {
    dialect: "sqlite",
    storage: ":memory:"
  },
  production: {
    username: 'postgres',
    password: 'admin',
    database: 'weather',
    host: 'localhost',
    dialect: 'postgres',
    port: 5432
  }
};