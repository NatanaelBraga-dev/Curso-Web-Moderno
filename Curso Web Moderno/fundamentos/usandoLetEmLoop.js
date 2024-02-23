/**
 * Aqui vamos ver o funcionamento do let quando utilizado em um loop.
 */
for (let i = 0; i < 10; i++){
    console.log(i)
}
/**
 * Sabemos que o let possui escopo de bloco então o que irá acontecer se chamarmos essa variável fora do for ?
 */
// console.log('i = ', i)

/**
 * O resultado será um erro apontando que a variável não foi declarada. diferentemente do 'var' que consegue ser utilizado
 * por não ter escopo de bloco
 */