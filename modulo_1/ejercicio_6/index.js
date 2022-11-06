// Crea un array de 3 pokemons, el tipo de dato a usar será un objeto. Deberá contener nombre, tipoDePokemon.
// Crea una condición y si el tipo de pokemon es fuego muestra por consola el mensaje ¡Es un pokemon de fuego!.

let pikachu = {
    nombre: "Pikachu",
    tipo: "Electricidad"
}

let charmander = {
    nombre: "Charmander",
    tipo: "Fuego"
}

let bulbasur = {
    nombre: "Bulbasur",
    tipo: "Agua"
}

let pokemon = [pikachu, charmander, bulbasur]
let condicion = "Fuego"

pokemon.forEach( pk => { if(pk.tipo === condicion) console.log(`${pk.nombre} es un pokemon de ${pk.tipo}`)})