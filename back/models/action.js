const Sequelize = require('sequelize')
const sequelize = require('../config/db.config')
const User = require("./user");


const Action = sequelize.define('action', {
    action_id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    next_step_date: Sequelize.DATE,

})


module.exports = Action