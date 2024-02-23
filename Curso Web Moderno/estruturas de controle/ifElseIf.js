/**
 * Neste exemplo iremos ver como encandear várias condições 'if' seguidas
 */

//abaixo criamos uma função que vai receber valores de inicio e fim, para posteriormente checarmos se os valores passados estão
//dentro ou não desses limites

//Obs: a partir do '.entre' podemos chamar essa função apenas se utilizando dessa nomenclatura
Number.prototype.entre = function (inicio,fim) {
    return this >= inicio && this <= fim //o this é usado para se referir ao valor passado para análise 
}

const imprimirResultado = function (nota) {
    if(nota.entre(9, 10)){
        console.log('Quadro de Honra');
    }
    else if(nota.entre(7, 8.99)){
        console.log('Aprovado');
    }
    else if(nota.entre(4, 6.99)){
        console.log('Recuperação');
    }
    else if(nota.entre(0, 3.99)) {
        console.log('Reprovado');
    }
    else{
        console.log('Nota Inválida');
    }

    console.log('fim')
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)