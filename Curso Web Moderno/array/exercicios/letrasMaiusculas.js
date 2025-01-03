/**
 * crie uma função que recebe um array contendo nomes e retorna um novo array com as letras maiusculas usando 
 * map
 */

const nomes = ['ana','joão','davi','leandro']

const toUpperCaseNames = nome => nome.toUpperCase()
console.log(nomes.map(toUpperCaseNames));
