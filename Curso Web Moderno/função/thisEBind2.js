//aula 94

//Nessa aula vemos mais formas de contornar o 'this' variável.

//abaixo criamos uma função construtora.
function Pessoa () {
    this.idade = 0

    setInterval(function(){ //a função 'setInterval' é usada para definir um temporizador para disparar a função anônima dentro dela
        //ou seja a função é chamada sem ser de forma explicita
        this.idade++
        console.log(this.idade)
    }.bind(this)/*bind foi utilizado para referenciar 'Pessoa', pois está fora da função */ ,1000)//tempo definido em milisegundos
}

new Pessoa//aqui criamos a instancia ao qual o this vai se referenciar

// OUTRA MANEIRA //

// function Pessoa () {
//     this.idade = 0

//     const self = this //criamos uma constante que armazena this no contexto léxico que queremos podemos reutilizar essa constante
//     //dessa forma temos o mesmo resultado sem chamar a função bind
//     setInterval(function(){ 
        
//         self.idade++
//         console.log(self.idade)
//     } ,1000)
// }