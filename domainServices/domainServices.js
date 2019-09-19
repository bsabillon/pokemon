const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Pokemon = require('../models/Pokemon');
const bodyParser = require('body-parser');
var containsOnlyStrings = /^[A-Za-z_ ]+$/; 
var containsOnlyNumbers = /^[0-9]/;

function isNameValid (name){
   return (containsOnlyStrings.test(name))
} 

function areAbilitiesValid (abilities){
    return (containsOnlyStrings.test(abilities))
 } 

 function areFormsValid (forms){
    return (containsOnlyStrings.test(forms))
 } 

 function areHeldItemsValid (held_items){
    return (containsOnlyStrings.test(held_items))
 } 

 function isLocationAreaValid (location_area_encounters){
    return (containsOnlyStrings.test(location_area_encounters))
 } 

 function areMovesValid (moves){
    return (containsOnlyStrings.test(moves))
 } 

 function areSpeciesValid (species){
    return (containsOnlyStrings.test(species))
 } 

 function areTypesValid (types){
    return (containsOnlyStrings.test(types))
 } 

 function isGameIndexValid (game_indices){
    return (containsOnlyNumbers.test(game_indices))
 } 

 function isBaseExperienceValid (base_experience){
    return (containsOnlyNumbers.test(base_experience))
 }

 function isHeightValid (height){
    return (containsOnlyNumbers.test(height))
 } 

 function isOrdertValid (order){
    return (containsOnlyNumbers.test(order))
 } 

 function areStatsValid (stats){
    return (containsOnlyNumbers.test(stats))
 } 

 function isWeightValid (weight){
    return (containsOnlyNumbers.test(weight))
 } 

var domainMethods = {

    isPokemonValid : (pokemon) => {
        return new Promise((resolve, reject) => {
            // console.log("POKETEST");
            // console.log(pokemon);
           if(isNameValid(pokemon.name)&&
              areAbilitiesValid(pokemon.abilities)&&
              areFormsValid(pokemon.forms)&&
              areHeldItemsValid(pokemon.held_items)&&
              isLocationAreaValid(pokemon.location_area_encounters)&&
              areMovesValid(pokemon.moves)&&
              areSpeciesValid(pokemon.species)&&
              areTypesValid(pokemon.types)&&
              isBaseExperienceValid(pokemon.base_experience)&&
              isGameIndexValid(pokemon.game_indices)&&
              isHeightValid(pokemon.height)&&
              isOrdertValid(pokemon.order)&&
              areStatsValid(pokemon.stats)&&
              isWeightValid(pokemon.weight)  ) 
            {
                resolve("Valid");
            }else{
                
                reject("Invalid");
            }
        })
    },
  
}

module.exports= domainMethods;