/**
 * Exercício Fácil
    Crie um objeto simples representando um carro. Ele deve conter:

    Propriedades: marca, modelo e ano.
    Um método chamado descricao que retorna uma string com os dados do carro no formato:
    "Este carro é um [marca] [modelo] do ano [ano]."

    Desafio extra: Crie dois carros diferentes e exiba suas descrições no console.
 */

class Carro {
    
    constructor(marca,modelo,ano){
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
    }

    descricao(){
        console.log(`Este carro é um ${this.marca} ${this.modelo} do ano ${this.ano}`);   
    }
}

const carro1 = new Carro("Corvette","C5",2002)
carro1.descricao()
const carro2 = new Carro("BMW","X1",2020)
carro2.descricao()