//aula 100

/**
 * nessa aula vamos utilizar novamente o conceito de callback e vamos ver a
 * diferença entre usar um codigo se utilizando de callback e escrever 
 * um codigo sem se utilizar do callback
 */

const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]
//objetivo = gerar um novo array com as notas menores que 7

//SEM CALLBACK
const notasBaixas = []
for (let i in notas){
    if (notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas);

//COM CALLBACK
const notasBaixas2 = notas.filter(function (nota){
    return nota < 7
})
/**
 * acima nós criamos uma constante que recebe uma função callback (notas.filter)
 * essa função tem a utilidade de filtrar um determinado array de acordo com 
 * um requisito passado...
 * 
 * após isso ela cria um array com todos os elementos que ficaram como 'true' 
 * após análise
 * 
 * nesse caso ela recebe como parametro uma função que recebe um param 'nota'
 * 
 * isso significa que... para cada 'nota' no array 'notas' essa função será 
 * chamada e o valor só será retornado caso seja menor do que 7
 * 
 */

console.log(notasBaixas2)

//USANDO ARROWFUNCTION

const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3);

// const notasMenorQue7 = nota => nota < 7
// const notasBaixas3 = notas.filter(notasMenorQue7)
// console.log(notasBaixas3);