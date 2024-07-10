//a estamos referenciando
//y se conoce como parametros
function suma(a) {
    return a + 2;
}
                 //5 es un argumento
let resultado = suma(5);
console.log(resultado);


//Se puede manejar multiples parametros y multiples argumentos
function sumas(a, b) {
    console.log(arguments);//poco recomendable arguments
    return a + b;
}
let resultados = sumas(5, 6, 1, 2, 3);
console.log(resultados);
console.log(typeof suma);