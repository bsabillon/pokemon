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

test('forms should contain only letters',()=>{
    expect(domainMethods.areFormsValid(pokemon.forms)).toBe(true);
})

test('held_items should contain only letters',()=>{
    expect(domainMethods.areHeldItemsValid(pokemon.held_items)).toBe(true);
})

test('location_area_encounters should contain only letters',()=>{
    expect(domainMethods.isLocationAreaValid(pokemon.location_area_encounters)).toBe(true);
})

test('moves should contain only letters',()=>{
    expect(domainMethods.areMovesValid(pokemon.moves)).toBe(true);
})

test('species should contain only letters',()=>{
    expect(domainMethods.areSpeciesValid(pokemon.species)).toBe(true);
})

test('types should contain only letters',()=>{
    expect(domainMethods.areTypesValid(pokemon.types)).toBe(true);
})

test('game_indices should contain only letters',()=>{
    expect(domainMethods.isGameIndexValid (pokemon.game_indices)).toBe(true);
})

test('base_experience should contain only numbers',()=>{
    expect(domainMethods.isBaseExperienceValid (pokemon.base_experience)).toBe(true);
})

test('height should contain only numbers',()=>{
    expect(domainMethods.isHeightValid (pokemon.height)).toBe(true);
})

test('order should contain only numbers',()=>{
    expect(domainMethods.isOrdertValid (pokemon.order)).toBe(true);
})

test('stats should contain only numbers',()=>{
    expect(domainMethods.areStatsValid (pokemon.stats)).toBe(true);
})

test('weight should contain only numbers',()=>{
    expect(domainMethods.isWeightValid (pokemon.weight)).toBe(true);
})


test('all input fields should be valid', () =>{
    return expect(domainMethods.isPokemonValid(pokemon)).resolves.toBe('Valid');
 }); 
    

    
