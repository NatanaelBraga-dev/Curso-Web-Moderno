//aula 102


/**
 * De forma semelhante com uma classe em python uma função construtora
 * é responsável por instanciar objetos que vão ter as propriedades
 * e os métodos criados dentro da função construtora 
 */
function Carro(velocidadeMaxima = 200, delta = 5){
    //atributo privado 

    //"velocidadeAtual" foi criada de forma privada para que o usuário não tenha
    //livre acesso a essa variável e possa fazer oq quiser
    let velocidadeAtual = 0

    //metodos = ações ou funções
    
    //atributos = caracteristicas

    //metodo publico
    //metodos são criados normalmente publicos para que o usuário esteja ciente
    //das informações que estão acontecendo

    this.acelerar = function(){
        if(velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
            console.log('Acelerando...')
        }
        else{
            velocidadeAtual = velocidadeMaxima
        }
    }

    //obs: O elemento 'this' é o responsavel por tornar os metodos visiveis e publicos.

    //metodo publico
    this.getVelocidadeAtual = function(){
        return velocidadeAtual
    }
}

//abaixo instanciamos um objeto 'uno'
const uno = new Carro
uno.acelerar()
console.log('velocidade atual do uno:',uno.getVelocidadeAtual());

const ferrari = new Carro(350,20)
console.log('velocidade atual da ferrari:',ferrari.getVelocidadeAtual());
ferrari.acelerar()
ferrari.acelerar()
console.log('velocidade atual da ferrari:',ferrari.getVelocidadeAtual())
