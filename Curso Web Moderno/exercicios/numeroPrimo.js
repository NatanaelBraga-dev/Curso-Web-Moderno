//descobrir se um numero é ou não primo

function verificaPrimo(valor){
    let quantidadeDeDivisores = 0
    for(let contador = valor; contador > 0; contador -= 1){
        if(valor % contador == 0){
            quantidadeDeDivisores++
        }
    }
    if(quantidadeDeDivisores == 2){
        console.log(`${valor} é um número primo`);
    }
    else{
        console.log(`${valor} não é um número primo`);
    }
}

verificaPrimo(13)