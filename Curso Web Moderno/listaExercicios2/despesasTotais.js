/**
 * Crie uma função que receba um array de produtos e retorne o valor total de despesas
 */

const produtos = [
    {nome: 'Caderno', categoria: 'Escolares', preco: 20.00},
    {nome: 'IphoneX', categoria: 'Eletrônicos', preco: 10000.00},
    {nome: 'Kindle', categoria: 'Eletrônicos', preco: 1000.00},
]

const arrayDePrecos = item => item.preco
const somaDosValores = (acumulador,itemAtual) => acumulador+=itemAtual
const despesasTotais = array => array.map(arrayDePrecos).reduce(somaDosValores)

console.log('Total de despesas: R$' + despesasTotais(produtos));