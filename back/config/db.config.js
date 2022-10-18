const {Sequelize, DataTypes} = require("sequelize");

const db = 'mpnapp'
const username = 'root'
const password = ''

const sequelize = new Sequelize(db, username, password, {
    dialect: "mysql",
    port: 3306,
});

module.exports=sequelize
