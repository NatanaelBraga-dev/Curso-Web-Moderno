/**
 * criar uma função que recebe um array de numeros e retorne um array contendo os numeros pares e
 * os elementos que possuem indices pares
 */

const numeros = [1,2,3,4,10,20,78,13]

const filtrarNumerosEIndicesPares = numeros.filter(function(numeroAtual, indice){
    if(indice !== 0){
        if(numeroAtual % 2 === 0 || indice % 2 === 0){
            return numeroAtual
        }
    }
})
console.log(filtrarNumerosEIndicesPares);