const Sequelize = require('sequelize')
const sequelize = require('../config/db.config')


const Next_step = sequelize.define('next_step', {
    next_step_id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    libelle: { type: Sequelize.STRING, allowNull:false },

})


module.exports = Next_step