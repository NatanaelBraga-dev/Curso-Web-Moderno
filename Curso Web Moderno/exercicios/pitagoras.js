//simulação de uma operação pitagórica

function teoremaPitagoras(cateto1 = undefined,cateto2 = undefined ,hipotenusa = undefined){
    if(cateto1 == undefined){
        let subtracao = hipotenusa**2 - cateto2**2
        let resultado = Math.sqrt(subtracao)
        console.log(`O vslor do cateto é igual a:${resultado.toFixed(2)}`)
    }
    if(cateto2 == undefined){
        let subtracao = hipotenusa**2 - cateto1**2
        let resultado = Math.sqrt(subtracao)
        console.log(`O valor do cateto é igual a: ${resultado.toFixed(2)}`);
    }
    if(hipotenusa == undefined){
        let soma = cateto1**2 + cateto2**2
        let resultado = Math.sqrt(soma)
        console.log(`O valor da hipotenusa é ${resultado.toFixed(2)}`)
    }
    if(hipotenusa != undefined & cateto1 != undefined & cateto2 != undefined){
        console.log("todos os termos estão definidos não há termo a ser descoberto")
    }

}

teoremaPitagoras(3,4)
