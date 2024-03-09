//Exercicio 12

/**
 * faça uma função que calcula o fatorial de um numero
 */

function calcularFatorial(numero){
    var antecessor = numero - 1
    if(numero != 0){    
        if(numero == 1){
            console.log("fatorial de",numero, "é 1");
        }
        else{
            let fatorial = numero * antecessor
            while(antecessor != 0){
                antecessor--
                if(antecessor != 0){
                    fatorial = fatorial * antecessor
                }
            }
            console.log(`fatorial de ${numero} é igual a: ${fatorial}`)
    }
    if(numero == 0){
        console.log(`fatorial de 0 é 1`);
    }
}
}
calcularFatorial(5)
calcularFatorial(6)