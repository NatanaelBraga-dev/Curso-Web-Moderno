const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'

//obs: para usar o template string precisa estar dentro de crases. O template string comtempla todos os espaços e quebras de linhas
const template = `
    Olá 
    ${nome}!`
    
console.log(concatenacao,template)

//expressões

console.log(`1 + 1 = ${1 + 1}`)//nesse caso ele irá interpretar somente o que está entre chaves

/**
 * O exemplo abaixo serve para ilustração de que podemos concatenar funções juntamente de strings e variáveis.
 * Nesse caso estamos apenas pegando uma variável e aplicando uma função que deixe a letra maiuscula 
 */
const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)