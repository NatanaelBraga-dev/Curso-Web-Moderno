//aula 103

//nessa aula vemos diferentes formas de declarar uma função 
//além disso, aprendemos que o leitor de código do javascript 
//só começa a rodar o código de cima para baixo após ter carregado
//todas as funções do código e só depois disso o código é executado


/**
 * OBS: só é possivel chamar essa função antes de sua declaração
 * pois ela foi declarada de forma 'function declaration'
 * 
 * com qualquer outra forma isso não será possivel
 * e a função haverá de ser chamada após sua declaração
 */
console.log(soma(3, 4));

//function declaration
function soma(x,y){
    return x + y
}

//function expression
const sub = function (x,y){
    return x - y
}
console.log(sub(3, 4));

//named function expression
const mult = function mult(x, y){
    return x * y
}

console.log(mult(3, 4));