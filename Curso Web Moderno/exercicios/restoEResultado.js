/**
 * exercicio 04
 * 
 * crie uma função que irá receber por dois valores
 * dividendo e divisor e irá imprimir o resto e o 
 * resultado da divisão
 */

function restoResultado(dividendo,divisor){
    if(dividendo != 0 & divisor != 0){
        console.log(`resultado: ${dividendo/divisor} \nresto: ${dividendo % divisor}`);
        console.log('--------------------');
    }
    else{
        console.log('O valor: 0 não é um valor válido');
    }
    
}

restoResultado(2,2)
restoResultado(4,5)
restoResultado(0,0)

