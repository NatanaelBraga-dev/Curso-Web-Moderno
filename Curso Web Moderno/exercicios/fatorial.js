//Exercicio 12

/**
 * faça uma função que calcula o fatorial de um numero
 */

function calcularFatorial(numero){
    var numeroSubtraido = numero - 1
    var fatorial = 0
    if(numero != 0){    
        if(numero == 1){
            console.log("fatorial de",numero, "é 1");
        }
        else{
            while(numeroSubtraido > 0 ){
                let operacao = numero * numeroSubtraido
                 if(operacao > 0){
                     fatorial = fatorial * operacao
                 }
             }
             console.log(`o fatorial de ${numero} é ${fatorial}`)

        }
    }
    
    if(numero == 0){
        console.log(`fatorial de 0 é 1`);
    }
}

calcularFatorial(4)
calcularFatorial(5)