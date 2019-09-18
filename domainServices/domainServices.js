const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Pokemon = require('../models/Pokemon');
const bodyParser = require('body-parser');
var r = /^[A-Za-z]+$/ ;

function isNameValid (name){
   if(r.test(name)) {
    return true;

   }
    else{
         return false;
        }

} 


var domainMethods = {

    isPokemonValid : (pokemon) => {
        return new Promise((resolve, reject) => {
            console.log("POKETEST");
            console.log(pokemon);
           if(r.test(pokemon.name)) 
            {
                resolve("Valid");
            }else{
                
                reject("Invalid");
            }
        })
    },
  

    // isUserEmailValid: (userEmail )=>{
    //     if ( userEmail.includes('@')){
    //         return true;
    //     }
    //     else{
    //         return false;
    //     }
    // },

    // isUserPasswordValid: (userPassword )=>{
    //     if ( userPassword.match(/^(?=.*\d)(?=(.*\W){2})(?=.*[a-zA-Z])(?!.*\s).{1,15}$/)){
    //         return true;
    //     }
    //     else{
    //         return false;
    //     }
    // }
}

module.exports= domainMethods;