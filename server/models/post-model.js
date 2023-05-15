const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const Post = sequelize.define("post", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    postTitle: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    postContent: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    postImage: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

module.exports = Post;