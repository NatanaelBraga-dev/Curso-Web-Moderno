/**
 *Exercício Médio
    Implemente um sistema de herança para diferentes tipos de animais.

    Crie uma classe base chamada Animal com:

    Propriedades: nome e som.
    Um método chamado emitirSom, que imprime no console:
    "[nome] faz [som]."

    Crie classes filhas chamadas Cachorro e Gato que herdam de Animal.

    Adicione métodos específicos:
    Cachorro: Um método buscar() que imprime:
    "[nome] está buscando a bola!"

    Gato: Um método arranhar() que imprime:
    "[nome] está arranhando o sofá!"

    Teste: Instancie um cachorro e um gato e use seus métodos para verificar o comportamento.
 */

class Animal {
    constructor(nome,som){
        this.nome = nome
        this.som = som
    }

    emitirSom(){
        console.log(`${this.nome} faz ${this.som}`);
    }
}

class Cachorro extends Animal{

    buscar(){
        console.log(`${this.nome} esta buscando a bola`);
    }
}

class Gato extends Animal{

    arranhar(){
        console.log(`O ${this.nome} está arranhando o sofá`);
        
    }
}

const gato1 = new Gato("Tom","miau")
const cachorro1 = new Cachorro("Scooby","Au Au")
gato1.emitirSom()
gato1.arranhar()
cachorro1.emitirSom()
cachorro1.buscar()