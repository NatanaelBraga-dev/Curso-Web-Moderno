const valores = [7.7,8.9,6.3,9.2]
console.log(valores[0], valores[3])//Acessando os valores a partir dos indices
console.log(valores[4])//Ao acessar um indice não existente o valor retornado é 'undefined'

valores[4] = 10//Adicionando ou alterando um valor a partir do indice 
console.log(valores[4])
console.log(valores.length)//verifica a quantidade de itens no Array

valores.push({id:3},false,null,'teste')//Adiciona um valor através do método .push
console.log(valores)

console.log(valores.pop())//Exclui o ultimo item do Array

delete valores[0]//Deleta o item a partir do indice
console.log(valores)

console.log(typeof valores)
