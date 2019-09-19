const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Pokemon = require('../models/Pokemon');
const bodyParser = require('body-parser');
var containsOnlyStrings = /^[A-Za-z_ ]+$/; 
var containsOnlyNumbers = /^[0-9]/;


var domainMethods = {
   areAbilitiesValid: (abilities)=>{
      return (containsOnlyStrings.test(abilities))
   }, 
  
   areFormsValid: (forms)=>{
      return (containsOnlyStrings.test(forms))
   },
  
   areHeldItemsValid: (held_items)=>{
      return (containsOnlyStrings.test(held_items))
   }, 
  
   isLocationAreaValid: (location_area_encounters)=>{
      return (containsOnlyStrings.test(location_area_encounters))
   }, 
  
   areMovesValid: (moves)=>{
      return (containsOnlyStrings.test(moves))
   }, 
  
   areSpeciesValid: (species)=>{
      return (containsOnlyStrings.test(species))
   }, 
  
   areTypesValid: (types)=>{
      return (containsOnlyStrings.test(types))
   }, 
  
   isGameIndexValid (game_indices){
      return (containsOnlyNumbers.test(game_indices))
   }, 
  
   isBaseExperienceValid: (base_experience)=>{
      return (containsOnlyNumbers.test(base_experience))
   },
  
   isHeightValid: (height)=>{
      return (containsOnlyNumbers.test(height))
   }, 
  
   isOrdertValid: (order)=>{
      return (containsOnlyNumbers.test(order))
   }, 
  
   areStatsValid: (stats)=>{
      return (containsOnlyNumbers.test(stats))
   }, 
  
   isWeightValid: (weight)=>{
      return (containsOnlyNumbers.test(weight))
   }, 

   isNameValid: (name)=>{
      return (containsOnlyStrings.test(name))
   },

    isPokemonValid : (pokemon) => {
        return new Promise((resolve, reject) => {
            // console.log("POKETEST");
            // console.log(pokemon);
           if(domainMethods.isNameValid(pokemon.name)&&
              domainMethods.areAbilitiesValid(pokemon.abilities)&&
              domainMethods.areFormsValid(pokemon.forms)&&
              domainMethods.areHeldItemsValid(pokemon.held_items)&&
              domainMethods.isLocationAreaValid(pokemon.location_area_encounters)&&
              domainMethods.areMovesValid(pokemon.moves)&&
              domainMethods.areSpeciesValid(pokemon.species)&&
              domainMethods.areTypesValid(pokemon.types)&&
              domainMethods.isBaseExperienceValid(pokemon.base_experience)&&
              domainMethods.isGameIndexValid(pokemon.game_indices)&&
              domainMethods.isHeightValid(pokemon.height)&&
              domainMethods.isOrdertValid(pokemon.order)&&
              domainMethods.areStatsValid(pokemon.stats)&&
              domainMethods.isWeightValid(pokemon.weight)  ) 
            {
                resolve("Valid");
            }else{
                
                reject("Invalid");
            }
        })
    },
  
}

module.exports= domainMethods;