/**
 * aqui vamos mostrar como funciona um laço de repetição 'for' e como é a sua estrutura
 */
let contador = 1 
while (contador <=  10){
    console.log(`contador = ${contador}`);
    contador++
}

/**
 * estrutura do 'for': 
 * 
 * entre os parenteses, primeiramente vamos declarar a variável contadora do nosso for.
 * após isso colocamos ';' e indicamos qual a condição para que seja rodado o laço de repetição
 * e por ultimo colocamos o incremento da nossa variável e fechamos parenteses
 */
for(let i = 1; i <= 10; i++) {
    console.log(`i = ${i}`);
}

//abaixo fazemos um exemplo em que o for irá percorrer todo o array
const notas = [6.4,7.4,9.8,8.1,7.7]
for (let i = 0 ; i < notas.length; i++) {
    console.log(`nota = ${notas[i]}`);
}
