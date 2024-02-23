// aula 109

/**
 * desafio de transpor a class da aula passada para uma função construtora
 */

function criarPessoa(nome){
    //atributo
    this.nome = nome 
    //método
    this.falar = function(){
        console.log(`ola meu nome é ${this.nome}`);
    }

}

pessoa1 = new criarPessoa('João')
pessoa1.falar()

pessoa2 = new criarPessoa('Natan')
pessoa2.falar()

