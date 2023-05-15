const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const Marque = sequelize.define("marque", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  marqueName: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  marqueImg: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Marque;
