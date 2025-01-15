/**
 * fazer uma função que recebe um array de numeros e retorna a soma de todos os numeros 
 */

const numeros = [10,20,20,30,100,20]

const somarNumeros = numeros.reduce((acumulador,numeroAtual) => {
    return acumulador += numeroAtual
})

console.log(somarNumeros);