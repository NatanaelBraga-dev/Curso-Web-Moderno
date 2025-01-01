/**
 * crie uma função que recebe o numero do mes do ano e retorne uma string contendo o mês que 
 * corresponde ao numero passado a função 
 * 
 * ex:
 * nomeDoMes(1) retorna "Janeiro"
 */

const nomeDoMes = function(numero){
    meses = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"]
    return meses[numero - 1]
}

console.log(nomeDoMes(1));