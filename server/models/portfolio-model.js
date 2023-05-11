const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const Portfolio = sequelize.define("portfolio", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  portfolioName: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  PortfolioDescription: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  portfolioImg: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Portfolio;
