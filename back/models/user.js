const Sequelize = require('sequelize')
const sequelize = require('../config/db.config')
const Action = require("./action");
const Partner = require("./partner");


const User = sequelize.define('user', {
    user_id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    f_name: { type: Sequelize.STRING, allowNull:false },
    l_name: { type: Sequelize.STRING, allowNull:false },
    email: { type: Sequelize.STRING, allowNull:false },
    password: { type: Sequelize.STRING, allowNull:false },
    refresh_token:{ type: Sequelize.TEXT,allowNull:true},
    type:{ type:Sequelize.INTEGER,allowNull:false},
    status:{ type:Sequelize.INTEGER, allowNull:false},

})
User.hasMany(Partner);
Partner.belongsTo(User);


module.exports = User