Array.prototype.filter2 = function(callback){
    const newArray = []
    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)){
            newArray.push(this[1])
        }
    }
    return newArray
}

const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'Ipad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de plastico', preco:18.99, fragil: false}
]

//desafio: fazer dois filters para retornar um array final somente com produtos frageis e com preco acima de 500

const produtoCaro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter2(produtoCaro).filter2(fragil));