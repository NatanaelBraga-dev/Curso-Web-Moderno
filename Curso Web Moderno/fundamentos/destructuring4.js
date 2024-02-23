/**
 * Abaixo mostramos destructuring em função usando Arrays
 * note que usemos uma lógica que faz com que se o valor min for maior que max então min e max trocarão de valores 
 */
function rand ([min = 0, max = 1000]){
    if (min > max) [min , max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
//Abaixo estamos passando os valores dos parametros da função por meio de destructuring usando Array 
console.log(rand([50,40]));
console.log(rand([992]))
console.log(rand([,10]));
console.log(rand([]));
