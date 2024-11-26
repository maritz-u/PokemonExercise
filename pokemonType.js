const pokemon = [
    {nombre: 'Pikachu', tipo: 'electrico'},
    {nombre: 'Charmander', tipo: 'Fuego'},
    {nombre: 'Bulbasaur', tipo: 'Planta'},
    {nombre: 'Squirtle', tipo: 'Agua'},
    {nombre: 'Charmeleon', tipo: 'Fuego'},
    {nombre: 'Weedle', tipo: 'bicho'},
    {nombre: 'Charizard', tipo: 'Fuego'}
];

const pokemontipoFuego = pokemon.filter((element) => {
  return element.tipo === 'Fuego'
})

console.log('pokemones de tipo fuego', pokemontipoFuego)