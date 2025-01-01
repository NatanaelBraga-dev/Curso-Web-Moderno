/**
 * desenvolva uma função que recebe dois numeros positivos ou iguais a zero e retorne a multiplicação entre eles sem usar o 
 * operador de multiplicação
 */

const multiplicar = function(numero1,numero2){
    if(numero1 === 0 || numero2 === 0){
        return 0
    }else{
        let numeroMultiplicado = 0
        for(let i = 0; i < numero2; i++){
            numeroMultiplicado += numero1
        }
        return numeroMultiplicado
    }
}

console.log(multiplicar(2,5));
