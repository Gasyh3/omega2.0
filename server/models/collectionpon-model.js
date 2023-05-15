const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const CollectionPon = sequelize.define('collectionpon', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    collectionponName: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    collectionponImg: {
        type: Sequelize.STRING,
        allowNull: false
    },
    collectionponDescription: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    collectionponPrice: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
});

module.exports = CollectionPon;
