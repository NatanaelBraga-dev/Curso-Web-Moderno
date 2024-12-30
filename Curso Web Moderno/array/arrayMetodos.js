const pilotos = ['Vettel','Alonso','Massa','Raikkonen']
pilotos.pop() //remove o ultimo elemento do array
console.log(pilotos);

pilotos.push('Verstappen')
console.log(pilotos);

pilotos.shift()//retira o primeiro elemento da lista
console.log(pilotos);

pilotos.unshift('Hamilton')//adiciona no inicio
console.log(pilotos);

//splice pode adicionar e remover elementos

//adicionar
pilotos.splice(2,0,'Bottas','Massa') //adicionando depois do segundo elemento
console.log(pilotos);

//remover
pilotos.splice(3,1)
console.log(pilotos);

const algundPilotos = pilotos.slice(2)//gera um novo array o slice retira uma parte do array formando outro
console.log(algundPilotos);

const algundPilotos2 = pilotos.slice(1,4) //retira a partir do indice 1 e vai até o indice 3 pois o indice 4 não entra 
console.log(algundPilotos2);