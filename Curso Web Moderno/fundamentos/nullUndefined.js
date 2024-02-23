let valor //não inicializada 
console.log(valor)

valor = null //não ocupa nenhum espaço de memória null quer dizer ausência de valor
console.log(valor)
//Usar null quando quisermos zerar o valor de uma variável

const produto = {}
console.log(produto.preço)
console.log(produto)

produto.preço = 3.50
console.log(produto)

produto.preço = undefined //Evitar atribuir undefined
console.log(produto.preço)
console.log(produto)

produto.preço = null //sem preço ou sem valor
console.log(!!produto.preço)
console.log(produto)