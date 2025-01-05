/**
 *  Crie uma função que receba um array de strings e retorne um objeto onde as chaves
 *  sejam as primeiras letras de cada palavra, e os valores sejam arrays contendo as palavras
 *  que começam com aquela letra. Use forEach
 */

const words = ["apple","banana","cherry","avocado","blueberry"];
let letrasIniciais = []
words.forEach(function(nome,indice){
    if(letrasIniciais.includes(nome[0])){

    }else{
        letrasIniciais.push(nome[0])
    }
})

letrasIniciais.forEach(function(letra, indice){
    let palavrasDaRespectivaLetra = []
    words.filter(function(nomes, indices){            
            if (nomes[0] === letra){
                palavrasDaRespectivaLetra.push(nomes)
            }
    })
    return console.log(`${letra}: ${palavrasDaRespectivaLetra}`);    
})

