//aula 106 

/**
 * função factory é uma função que vai retornar um objeto e além disso 
 * ela também atua como modelo de projetos
 */

//factory simples:

function criarPessoa(){
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}
//estamos instanciando um objeto através dessa função o que significa
//que a cada vez que retornamos uma função retornamos um novo objeto
//também podemos passar as propriedes do objeto pelos parametros da função

console.log(criarPessoa());