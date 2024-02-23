//aula 108

//nessa aula veremos a diferença de usar uma função factory e uma Class

/**
 * abaixo criamos uma class que vai representar um objeto pessoa
 * esse objeto recebe um atributo nome passado por um parametro na construção do atributo
 * e logo abaixo temos um metodo falar que imprime o atributo nome do nosso objeto
 */

class Pessoa{
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(`olá meu nome é ${this.nome}`);
    }
}

const pessoa1 = new Pessoa('João')
pessoa1.falar()

//abaixo usando função factory

const criarPessoa = nome => {
    return{
        falar: () => console.log(`Olá meu nome é ${nome}`)
    }
}

const pessoa2 = criarPessoa('João')
pessoa2.falar()