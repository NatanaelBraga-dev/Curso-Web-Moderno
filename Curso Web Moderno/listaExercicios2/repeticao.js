/**
 * crie uma função que recebe dois parametros, o primeiro é um elemento e o segundo é a
 * quantidade de vezes que esse elemento vai se repetir, depois retorne um array com 
 * o elemento se repetindo
 * 
 * ex:
 * 
 * repeticao('elemento', 2) -> ['elemento','elemento']
 */

function repetir(elemento, qttd){
    itens = []
    for(let i = 0; i < qttd; i++){
        itens.push(elemento)
    }
    return itens
}

console.log(repetir('elemento',2));