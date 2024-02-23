//Armazenando uma função dentro de uma variável

const imprimirSoma = function (a, b){
    console.log(a+b)
}

imprimirSoma(2, 3)

//Armazenando uma função arrow em uma variável
const soma = (a, b) => {
    return a+b
}

console.log(soma(2, 3))

//Retorno implicito
const subtracao = (a, b) => a-b //Aqui temos uma versão reduzida de uma função que retorna a subtração de a-b, 
//ela só pode ser escrita dessa maneira se for uma função de apenas uma linha de sentença de código.
//note que nesse modelo reduzimos muito nosso código retirando as palavras return,function e o corpo da função

console.log(subtracao(2, 3))

const imprimir2 = a => console.log(a)
imprimir2('Legal!!!')