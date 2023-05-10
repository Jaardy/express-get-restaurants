const path = require("path");
const Sequelize = require("sequelize");

const db = new Sequelize({
  dialect: "sqlite",
  storage: path.join(__dirname, "db.sqlite"),
  logging: false,
});

// const db = new Sequelize("sqlite::memory", { logging: false });

module.exports = db;
