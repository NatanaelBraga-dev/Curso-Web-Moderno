/**
 * Aqui vamos demonstrar exemplos de como usar destructuring em Array 
 */

//Aqui vai um exemplo simples de como definir um valor para uma variável em um Array
const [a] = [10]
console.log(a)

//Abaixo mostramos como fazer isso com vários valores, observe que alguns valores não foram printados pois não foram declarados
//e também que outros valores receberam valores padrão
const [n1, , n2, n3,n4, ,n5 = 0] = [10,7,9,8]
console.log(n1,n2,n3,n4,n5)

//fazendo a mesma coisa com Arrays aninhados
const [, [,nota]] = [[,8,8], [9,6,8]]
console.log(nota)