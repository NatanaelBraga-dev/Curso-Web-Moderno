/**
 * exercicio 05 
 * 
 * Desenvolva uma função JavaScript para que ela receba um 
 * valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto)
 */

function tratarResposta(numero){
    lista = []
    numeroAtualizado = numero.toFixed(2)
    numeroString = numeroAtualizado.toString()
    lista.push(numeroString)
    for(let indiceDoNumero = 0; indiceDoNumero < lista.length; indiceDoNumero++){
        let numeroFinal = lista[indiceDoNumero].replace('.',',')
        console.log('R$',numeroFinal);
    }
    
}

tratarResposta(12234.2324)

//.replace() "troca o primeiro argumento passado pelo segundo em uma sequencia de caracteres"
//.toFixed() "formata o numero passado arredondando as casas decimais de acordo com o parametro"
/**
 * Ex 
 * 
 * numero = 234.223
 * numero.toFixed(2)
 * retorno esperado = 234.22
 */

//.toString() "transforma o item passado em uma string"
//.push() "adiciona o item passado por parametro no final de uma lista"

/**
 * Ex:
 * lista = []
 * numero = 123
 * lista.push(numero)
 * 
 * retorno esperado = [123]
 */