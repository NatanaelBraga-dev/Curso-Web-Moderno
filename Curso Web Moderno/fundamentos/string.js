const escola = "Cod3r"

console.log(escola.charAt(3))//essa função vai retornar a letra encontrada no a partir do indice passado em parênteses
console.log(escola.charAt(8))//caso o valor exceda a quantidade de caracteres o javascript irá retornar nulo

console.log(escola.charCodeAt(3))//essa função retorna um numero de acordo com a tabela da unicode disponivel na internet

console.log(escola.indexOf('d'))//essa função retorna o indice do elemento na variável passada

console.log(escola.substring(1))//essa função vai imprimir o valor a partir do indice passado no nosso caso seria "o3der"
console.log(escola.substring(0,3))//essa vai imprimir nossa variável a partir dos parâmetros sendo eles respectivamente começo 
//e fim (obs: a função só irá imprimir até o indice anterior ao valor passado como indice final)

console.log('Escola '.concat(escola).concat("!"))//essa função irá concatenar ou juntar os valores passados
console.log('Escola '+escola+"!")//Outra forma de concatenar elementos

console.log(escola.replace(3, 'e'))//A função replace vai substituir o elemento que estiver no indice 3 pelo elemento passado 
//Nesse caso a letra 'e'

console.log('Ana,Maria,Pedro'.split(','))//Essa função vai pegar o conjunto de string e transformalos em um Array quebrando os 
//Mesmos em elementos diferentes, em parênteses o elemento que vamos usar para separar os elementos
