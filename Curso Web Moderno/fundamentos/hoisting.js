/**
 * O conceito do hoisting consiste em ser um comportamento padrão da linguagem em jogar a declaração para o topo
 */
//funciona somente com tipo 'var'
console.log('a = ',a)
var a = 2
console.log('a = ',a)

/**
 * no caso ácima vimos que ao em vez de apontar um erro no código ele mostra o valor de 'a' como sendo undefined.
 * Isso acontece porque o interpretador da linguagem sabe identificar que você declarou a variável. porém ele só vai conseguir ter
 * acesso ao valor do 'var' se for chamado linhas abaixo.
 */

//mesmo sendo um conceito não utilizado é importante conhece-lo