const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1,peso2)
console.log(Number.isInteger(peso1))//a função isInteger verifica se o valor da variável é do tipo inteiro

const avaliacao1 = 9.845
const avaliacao2 = 6.893

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1+peso2)

console.log(media.toFixed(1)) //a função toFixed vai reduzir a quantidade de casas decimais do meu resultado de acordo com valor passado
console.log(media.toString(16))//a função toString converte o valor a uma string, de acordo com o número passado ela poderá retornar de binários ou até hexadecimais
console.log(typeof media)//verifica o tipo do dado que está sendo passado
console.log(typeof Number)
