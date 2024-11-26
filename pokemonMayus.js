const pokemon = [
    {nombre: 'Pikachu'},
    {nombre: 'Charmander'},
    {nombre: 'Bulbasaur'},
    {nombre: 'Squirtle'}
];

console.log("Arreglo antes del map", pokemon)

const pokemon1 = pokemon.map((element, index, array) => {
  return element.nombre.toUpperCase()
})

console.log('Arreglo después del map', pokemon1)
