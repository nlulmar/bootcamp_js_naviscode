// Crea un array de 3 pokemons.
// Muestra por consola el nombre de cada pokemon.
// Bonus de investigación: ¿Cómo se puede mostrar el nombre de cada pokemon en una línea?
// Bonus extra: ¿Cómo se pueda hacer esto con bucles?

let pokemon = ["Pikachu", "Bulbasur", "Charmander"]
pokemon.forEach(pk => console.log(pk))
for(let i=0; i < pokemon.length; i++) {
    console.log(pokemon[i])
}
