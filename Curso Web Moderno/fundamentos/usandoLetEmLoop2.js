/**
 * Aqui é a repetição do exemplo de usandoVarEmLoop2.js somente alterando tipo 'var' para 'let'
 */

const funcs = []

for (let i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

/**
 * Note que essa pequena mudança já é algo muito significativo pois o 'let' tem escopo de bloco enquanto o 'var' não tem 
 * isso faz com que o valor selecionado para ser mostrado no trecho abaixo seja exatemente o valor que queremos.
 */

funcs[2]()
funcs[8]()