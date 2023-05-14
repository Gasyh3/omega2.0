const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const Livredor = sequelize.define('livredor', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    livredorName: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    livredorMot: {
        type: Sequelize.TEXT,
        allowNull: false
    },
});

module.exports = Livredor;