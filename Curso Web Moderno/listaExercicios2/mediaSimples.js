/**
 * crie uma função que recebe um array de numeros e retorna a media simples
 */

const numeros = [1,2,3,4,10]

const somaDosNumeros = (acumulador,itemAtual) => acumulador+=itemAtual

const mediaSimples = function(array){
    return array.reduce(somaDosNumeros)/array.length
}
console.log(mediaSimples(numeros));