const express = require('express');
const Pokemon = require('../models/Pokemon');
const bodyParser = require('body-parser');
const domainMethods = require('../domainServices/domainServices');

var appServices = {

    addPokemon: function(request, response){
        domainMethods.isPokemonValid(request.body)
        .then( onResolved =>
            Pokemon.create(
                request.body
             )
             .then(pokemon=>{
                response
                .status(200)
                .send('pokemon added successfully');
                })
             .catch(error=>
                response.send("Error adding Pokemon: "+ error))
            )    
            .catch(onError =>
                response.send("Error: "+ onError)
            )  
    },
    
    getPokemons: function(request, response){
        Pokemon.findAll()
        .then(pokemons=>{
            response.json(pokemons);
        })
        .catch((error)=>{
            response.send("Error: "+ error)
            })
        
    },

    getPokemonById: function(request, response){
        Pokemon.findOne({
            where:{
                id: request.params.id,
            }
        })
        .then(pokemons=>{
            response.json(pokemons);
        })
        .catch((error)=>{
            response.send("Error: "+ error)
            })
        
    },

    getPokemonByName: function(request, response){
        Pokemon.findOne({
            where:{
                name: request.params.name,
            }
        })
        .then(pokemons=>{
            response.json(pokemons);
        })
        .catch((error)=>{
            response.send("Error: "+ error)
            })
        
    },

    updatePokemon: function(request,response){
        Pokemon.update(
            {abilities: request.body.abilities,
             base_experience: request.body.base_experience,
             forms: request.body.forms,
             game_indices: request.body.game_indices,
             height: request.body.height,
             held_items: request.body.held_items,
             is_default: request.body.is_default,
             location_area_encounters: request.body.location_area_encounters,
             moves: request.body.moves,
             name: request.body.name,
             order: request.body.order,
             species:request.body.species,
             sprites: request.body.sprites,
             stats: request.body.stats,
             types: request.body.types,
             weight: request.body.weight            
            },
            {where:{id: request.params.id } }
        )
        .then(pokemon=>{
            response
            .status(200)
            .send('Pokemon updated successfully!')
        })
        .catch(error=>
            response.send("Error: "+ error)
        )
    },


    deletePokemon: function(request,response){
        Pokemon.destroy({
            where: {
                id: request.params.id
            }
        })
        .then(pokemon=>{
            response
            .status(200)
            .send('Pokemon has been disabled successfully!')
        })
        .catch(error=>
            response.send("Error: "+error))
    },


    


}

module.exports= appServices;