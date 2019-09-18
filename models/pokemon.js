const Sequelize = require('sequelize');
const database = require('../config/database');

const Pokemon = database.define('pokemon', {
    abilities: {
        type:Sequelize.STRING
    },
    base_experience: {
        type:Sequelize.INTEGER
    },
    forms: {
        type:Sequelize.STRING
    },
    game_indices: {
        type:Sequelize.STRING
    },
    height: {
        type:Sequelize.INTEGER
    },
    held_items: {
        type:Sequelize.STRING
    },
    is_default: {
        type:Sequelize.BOOLEAN
    },
    location_area_encounters: {
        type:Sequelize.STRING
    },
    moves: {
        type:Sequelize.STRING
    },
    name: {
        type:Sequelize.STRING
    },
    order: {
        type:Sequelize.INTEGER
    },
    species: {
        type:Sequelize.STRING
    },
    sprites: {
        type:Sequelize.STRING
    },
    stats: {
        type:Sequelize.STRING
    },
    types: {
        type:Sequelize.STRING
    },
    weight: {
        type:Sequelize.INTEGER
    },
},
{
    freezeTableName: true,
}
)

module.exports = Pokemon;