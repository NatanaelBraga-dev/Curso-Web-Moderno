const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'Ipad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de plastico', preco:18.99, fragil: false}
]

console.log(produtos.filter(function(p){ //retorna um array menor ou do mesmo tamanho que o original
    return p.fragil == false
}));

//desafio: fazer dois filters para retornar um array final somente com produtos frageis e com preco acima de 500

const produtoCaro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(produtoCaro).filter(fragil));