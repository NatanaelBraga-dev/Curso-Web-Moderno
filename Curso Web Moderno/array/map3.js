Array.prototype.map2 = function(callback){
    const newArray = []
    for (let i = 0; i< this.length; i++){
        newArray.push(callback(this[i], i , this))
    }
    return newArray
}

const carrinho = [
    '{"nome": "Borracha", "preco":3.45}',
    '{"nome": "Caderno", "preco":13.90}',
    '{"nome": "Kit de Lapis", "preco":41.22}',
    '{"nome": "Caneta", "preco":7.50}'
]

//DESAFIO: retornar um array apenas com os preços

const arrayComObjetos = carrinho.map2(function(e){
    return JSON.parse(e)
})
console.log(arrayComObjetos);

const somentePrecos = arrayComObjetos.map2(function(e){
    return(
        e.preco
    )
})

console.log(somentePrecos);