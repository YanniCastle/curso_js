//Tipo de referencia

//Personaje de TV
let nombre = "Tanjiro";
let anime = "Demon slayer";
let edad = 16;
              //Objeto literal {}
let personaje = {
    // llave  -   valor
    //propiedad - valor
    nombre:"Tanjiro",
    anime:"Demon Slayer",
    edad: 16,
};
console.log(personaje);
//si solo queremos una propiedad
console.log(personaje.nombre);
//otra forma de ver es
console.log(personaje['anime']);

//Si necesito modificar propiedad?
personaje.edad =13;
//o tambien asi
personaje['edad'] = 16;

//para borrar propiedad
delete personaje.anime;
console.log(personaje);
