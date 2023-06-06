const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');
const { Sequelize } = require('sequelize');
const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
});

const Message = sequelize.define('Message', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    text: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    }
},{
    timestamps: false,
});

Message.belongsTo(User, {
    foreignKey: 'authorId',
    as: 'author',
});
Message.belongsTo(User, {
    foreignKey: 'recipientId',
});


module.exports = { User, Message };
