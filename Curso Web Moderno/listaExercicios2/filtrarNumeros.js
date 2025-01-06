/**
 * escreva uma função que recebe um array como parametro e retorna um array somente com os numeros
 * que estavam dentro do array recebido por parametro
 */

const filtrarNumeros = function(array){
    return array.filter(function(elementos){
        if(typeof elementos === 'number'){
            return elementos
        }
        else{
            []
        }
    })
}

console.log(filtrarNumeros([10,'seilá','numero','20',30]));
