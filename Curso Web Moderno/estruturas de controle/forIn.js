/**
 * For/In é uma forma diferente de utilizarmos esse laço de repetição, uma das diferenças do for para o For/IN
 */

const notas = [6.7,7.4,9.8,8.1,7.7]

/**
 * obs: a variável declarada nos parâmetros (i) guarda apenas o valor do indice do elemento do array
 */
for (let i in notas){
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64,
}

/**
 * a variável atributo pega somente a chave do objeto pessoa
 */
for (let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}

