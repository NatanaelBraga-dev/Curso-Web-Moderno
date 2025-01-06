/**
 * escreva uma função que recebe dois parametros sendo o primeiro um objeto e o segundo
 * uma propriedade do objeto passado, faça com que essa função retorne uma cópia do objeto passado pelo parametro 
 * mas sem a propriedade especificada
 * 
 * ex: refatorarObjeto({id: 10, nome: 'robo com defeito'}, nome) -> saída {id: 10}
 */

const removerPropriedade = function(objeto, propriedade){
    const novoObjeto = Object.assign({}, objeto)
    delete novoObjeto[propriedade]
    return novoObjeto
}   

const Pessoa = {
    nome: 'Renata',
    idade: 20
}

console.log(removerPropriedade(Pessoa,"nome"));