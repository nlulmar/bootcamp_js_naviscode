/* Crea una variable llamada nombre y asígnale tu nombre como valor.
 Crea una variable llamada edad y asígnale tu edad como valor.
 Crea una variable llamada mayorDeEdad y asígnale un valor booleano que indique si eres mayor de edad.
 Crea una variable llamada direccion y asígnale un objeto con tu dirección.
 Crea una variable llamada coloresFavoritos y asígnale un array con tus colores favoritos.
 Crea una variable llamada lenguajesFavoritos y asígnale un array con tus lenguajes de programación favoritos.
 Crea una variable llamada mejorLenguaje y asígnale el primer elemento del array lenguajesFavoritos.
 Crea una variable llamada peorLenguaje y asígnale el último elemento del array lenguajesFavoritos.*/

 let nombre = "Nitin"
 let edad = 38
 let mayorDeEdad = edad >= 18 ? true : false
 let direccion = {
    calle: "Aquí al lado",
    numero: 36,
    municipio: "Lejos",
    codigoPostal: 29638
 }
 let coloresFavoritos = ["azul", "amarillo"]
 let lenguajesFavoritos = ["Scala", "JavaScript"]
 let mejorLenguaje = lenguajesFavoritos[0]
 let peorLenguaje = lenguajesFavoritos[1]

// console.log(nombre, edad, mayorDeEdad, direccion, coloresFavoritos, lenguajesFavoritos, mejorLenguaje, peorLenguaje);