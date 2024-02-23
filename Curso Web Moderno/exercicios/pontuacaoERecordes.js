/**
 * exercicio 08
 * 
 * Pedro joga N jogos de basquete por temporada e para saber se está progredindo
 * mantém o registro de suas pontuações jogo a jogo e confere se a pontuação do mesmo
 * foi a mesma, maior ou menor que o seu melhor e pior desempenho...
 * 
 * dada uma lista string = "pontuação1, pontuação2, pontuação3 etc..."
 * escreva uma função que irá comparar os valores um a um e irá retornar um vetor com o
 * número de vezes que ele bateu seu recorde de maior numero de pontos e quando fez seu pior jogo (numero do pior jogo)
 * 
 * exemplo de entrada = "23 24 5 34 43"
 */

lista = [23,34,12,45,12,60]
listaComResultados =[]

function checaRecordes(lista){
    let quebraDeRecordes = 0
    let recordeAtual = lista[0]
    let piorPontuacao = Math.min.apply(null,lista)
    for(let contador = 0; contador < lista.length; contador++){
        if(lista[contador] > recordeAtual){
            recordeAtual = lista[contador]
            quebraDeRecordes++
        }
    }
    listaComResultados.push(quebraDeRecordes)
    listaComResultados.push(piorPontuacao)
    console.log(listaComResultados)
} 

checaRecordes(lista)

/**
 * Math.min.apply(null, array) "pega o menor valor de um array"
 */