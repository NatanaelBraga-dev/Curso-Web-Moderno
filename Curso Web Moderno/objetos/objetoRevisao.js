// um objeto é uma coleção dinâmica de pares chave/valor

const produto = new Object //maneira de criar um objeto
produto.nome = "cadeira"
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco //deletando um par chave/valor
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    },{
        nome:'Ana',
        idade: 42
    }],
    
    calcularValorSeguro: function(){
        //...
    }
}

carro.proprietario.endereco.numero = 1000 //alterando valores do objeto usando notação ponto
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante' //mudando utilizando os nomes das chaves 
console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro);
console.log(carro.condutores);
// console.log(carro.condutores.length) esse comando vai dar um erro pois está tentando achar algo dentro de uma coisa undefined