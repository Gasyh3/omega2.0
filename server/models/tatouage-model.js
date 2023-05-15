const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const Tatouage = sequelize.define('tatouage', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    tatouageName: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    tatouageImg: {
        type: Sequelize.STRING,
        allowNull: false
    },
    tatouageDescription: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    tatouagePrice: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
});

module.exports = Tatouage;