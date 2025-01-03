/**
 * crie uma função que recebe um array de numeros e retorne um novo array contendo apenas os numeros pares
 * usando o método filter
 */

const numbers = [1,2,3,4,5,6]

const filterEvenNumbers = numbers => numbers % 2 === 0
console.log(numbers.filter(filterEvenNumbers));
