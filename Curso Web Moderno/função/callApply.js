// aula 111

/**
 * nessa aula vamos ver mais duas formas diferentes de invocar
 * uma função e quais são suas diferenças
 */

function getPreco(imposto = 0, moeda = 'R$'){
    //abaixo calcula o valor do produto com desconto e imposto
    return `${moeda} ${this.preco  * (1 - this.desc) * (1 + imposto)}`
}

//abaixo criamos um objeto 'produto' que aciona como metodo a nossa funcao 'getpreco'
const produto = {
    nome: 'notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

//abaixo instanciamos as variaveis de forma global
global.preco = 20
global.desc = 0.1

console.log(getPreco())
console.log(produto.getPreco());

//abaixo criamos outro objeto
const carro = { preco: 49990, desc: 0.20}

/**
 * abaixo invocamos a nossa funcao 'getpreco' usando 'apply' e 'call'
 * ambas as formas pedem que o contexto no qual a função será executada
 * seja informado, que no caso e o objeto carro
 */
console.log(getPreco.call(carro));
console.log(getPreco.apply(carro));

//qual a diferença das duas ?

//argumentos da funcao passados juntos com o contexto
console.log(getPreco.call(carro, 0.2,'$'));
//argumentos da funcao passados dentro de um array após o contexto
console.log(getPreco.apply(carro, [0.2, '$']));
