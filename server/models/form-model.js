const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const Form = sequelize.define("form", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    formNom: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    formPrenom: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    formEmail: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    formTelephone: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    formMessage: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
});

module.exports = Form;  
