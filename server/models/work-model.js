const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const Work = sequelize.define("work", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  prestation: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  workName: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  workDescription: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  workPrice: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Work;
