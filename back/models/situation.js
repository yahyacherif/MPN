const Sequelize = require('sequelize')
const sequelize = require('../config/db.config')


const Situation = sequelize.define('situation', {
    situation_id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    libelle: { type: Sequelize.STRING, allowNull:false },

})


module.exports = Situation