/**
 * crie uma função que receba um valor booleano ou numérico e retorne o inverso daquele valor passado
 * se o valor for true, retorne false
 * se o valor for 1, retorne -1
 * 
 * se o parametro recebido for de outro tipo retorne:
 * "booleano ou numeros esperados, mas o parametro é do tipo ..."
 */

const inverso = function(numeroOuBoolean){
    if(typeof numeroOuBoolean === "number" || typeof numeroOuBoolean === "boolean"){
        let valorInverso = !numeroOuBoolean
        if(typeof numeroOuBoolean === 'number'){
            let numeroInverso = numeroOuBoolean * -1
            return console.log(numeroInverso);
        }
        else{
            return console.log(valorInverso);
        }
    }
    else{
        return console.log('booleanos ou numeros esperados mas o parametro é do tipo:'+ typeof numeroOuBoolean);
    }
}

inverso(false)
inverso(2)
inverso('true')