const Sequelize = require('sequelize')
const sequelize = require('../config/db.config')
const User = require('./user')

const Partner = sequelize.define('partner', {
    partner_id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    raison_social: { type: Sequelize.STRING, allowNull:false },
    contact: { type: Sequelize.STRING, allowNull:false },
    num_contact:{ type:Sequelize.INTEGER,allowNull:false},
    email_contact: { type: Sequelize.STRING, allowNull:false },
    mpn_id:{ type:Sequelize.STRING, allowNull:true},
    situation:{ type:Sequelize.STRING,allowNull:true},

})



module.exports = Partner