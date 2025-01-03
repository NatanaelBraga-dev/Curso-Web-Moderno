/**
 * crie uma função que recebe um array com vários objetos representando produtos e retorna um valor final
 * da soma do preço de todos eles usando reduce
 */

const products = [
    { name: "Notebook", price: 2500 },
    { name: "Mouse", price: 50 },
    { name: "Teclado", price: 100 }
];

const getPrecos = item => item.price
const somaPrecos = (acumulador, valorAtual) => acumulador + valorAtual

console.log(products.map(getPrecos).reduce(somaPrecos));