/**
 * escreva uma função que recebe um objeto e retorne um array de arrays no qual os arrays dentro 
 * do array são as propriedades desse objeto
 */

const Pessoa = {
    nome: "Rebeca",
    idade: 19
}

const propriedadesEmArrays = function(objeto){
    return Object.entries(objeto)
}

console.log(propriedadesEmArrays(Pessoa));