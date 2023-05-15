const Sequelize = require("sequelize");
const sequelize = require("../config/database");
const Work = require("./work-model");
const Marque = require("./marque-model");

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

Category.hasMany(Work, { foreignKey: "categoryId", as: "works" });
Work.belongsTo(Category, { foreignKey: "categoryId", as: "category" });
Category.hasMany(Marque, { foreignKey: "categoryId", as: "marque" });
Marque.belongsTo(Category, { foreignKey: "categoryId", as: "category" });

module.exports = Category;
