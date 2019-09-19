const domainMethods = require('../domainServices/domainServices');

pokemon = 
{
    id: 16,
    abilities: "lightning rod",
    base_experience: 112,
    forms: "pikachu",
    game_indices: "25",
    height: 4,
    held_items: "Oran berry",
    is_default: true,
    location_area_encounters: "Viridian forest area",
    moves: "Mega Punch",
    name: "sssss",
    order: 35,
    species: "pikachu",
    sprites: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    stats: "90",
    types: "Electric",
    weight: 60
}

  
test('name should contain only letters',()=>{
    expect(domainMethods.isNameValid(pokemon.name)).toBe(true);
})

test('abilities should contain only letters',()=>{
    expect(domainMethods.areAbilitiesValid(pokemon.abilities)).toBe(true);
})

test('all input fields should be valid', () =>{
    return expect(domainMethods.isPokemonValid(pokemon)).resolves.toBe('Valid');
 }); 
    

    
