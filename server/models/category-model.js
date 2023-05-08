const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const Category = sequelize.define("category", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  categoryName: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  categoryImg: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Category;
