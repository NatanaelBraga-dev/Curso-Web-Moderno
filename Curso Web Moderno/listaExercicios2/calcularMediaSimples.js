//faça uma função que recebe um array de numeros e retorna a média simples dos numeros do array 

const listaNumeros = [0,10]

const mediaSimples = function(array){
   const media = array.reduce((acumulador,elementoAtual) => (acumulador+=elementoAtual) / array.length)
   return media
}

console.log(mediaSimples(listaNumeros))