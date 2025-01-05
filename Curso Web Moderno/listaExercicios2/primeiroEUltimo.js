/**
 * crie uma função que receba um array e retorne um novo array contendo o primeiro 
 * e o ultimo elemento desse array
 */

const itens = [1,2,3]

const FirstAndLastElements = function (array){
    let arrayNovo = []
    arrayNovo.push(array[0])
    arrayNovo.push(array[array.length - 1])
    return arrayNovo
}

console.log(FirstAndLastElements(itens));