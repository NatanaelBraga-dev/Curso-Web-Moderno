/**
 * Aqui iremos efetuar um exemplo para demonstrar o tipo de operador ternário
 * O operador ternário irá trabalhar com 3 partes do código escrito
 * 
 * note que abaixo criamos uma função arrow com um parâmetro 'nota', e a estrutura
 * ficou da seguinte forma.
 * 
 * primeiro realizamos uma comparação nesse caso é se 'nota' é maior ou igual a 7
 * após isso usamos o operador cujo simbolo é: '?' e logo após isso vamos escrever
 * respectivamente o valor retornado caso a expressão seja verdadeira, nesse caso: 'aprovado'
 * e o que deve ser retornado se a expressão for falsa no caso: 'reprovado'
 */

const resultado = nota => nota >= 7 ? 'aprovado' : 'reprovado'

console.log(resultado(7.1));
console.log(resultado(6.7));

