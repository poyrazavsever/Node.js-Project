const Sequelize = require('sequelize');

const sequlize = new Sequelize('node-app', 'root', 'Mysql1234', {
    dialect: 'mysql',
    host:'localhost'
});

module.exports = sequlize;