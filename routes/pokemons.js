const express = require('express');
const router = express.Router();
const appServices = require('../applicationServices/appServices');
const db = require('../config/database');
const bodyParser = require('body-parser');
const Pokemon = require('../models/pokemon');


router.post('/add',appServices.addPokemon);
router.get('/',appServices.getPokemons);
router.get('/byId/:id?',appServices.getPokemonById);
router.get('/byName/:name?',appServices.getPokemonByName);
router.put('/update/:id?',appServices.updatePokemon);
router.delete('/delete/:id?',appServices.deletePokemon);


module.exports = router;