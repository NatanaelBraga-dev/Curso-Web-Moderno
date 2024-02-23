//aula 95

//nessa aula veremos uma revisão sobre arrowfunction

/**
 * Arrowfunction nada mais é do que uma outra forma de escrever uma função... suas principais diferenças para o metodo tradicional
 * é a redução da sintaxe ou seja ela ocupa menos espaço no código e além disso possui um 'this' que sera dado pelo contexto
 * onde a função foi inserida.
 */

let dobro = function(a){
    return 2 * a
}

dobro = (a) => { //obtivemos redução de sintaxe 
    return 2 * a
}

dobro = a => 2 * a //só pode ser utilizado quando tivermos apenas 1 parâmetro e o return é implicito
console.log(dobro(Math.PI));

ola = () => 'Olá'//função sem param

ola = _ => 'Olá' //possui um param

console.log(ola())