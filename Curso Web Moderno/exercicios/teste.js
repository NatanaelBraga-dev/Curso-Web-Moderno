// let nome = "vanilla"
// let nome2 = "firefox"
// nomealterado = nome.replace("van","moz")
// console.log(nomealterado);

// lista = []
// lista.push(nome2)
// lista.push(nome)
// console.log(lista);
// for(let contador = 0; contador < lista.length; contador++){
//     let palavra = lista[contador];
//     console.log(palavra[1]);
// }

// lista = [12,13,13]
// console.log(Math.max.apply(null,lista));
// console.log(Math.min.apply(null,lista));

//math.max.apply(null, meu array) "serve para pegar o maior valor de um array"

// let numero = 4

// let numerosubtraido = numero - 1
// let valor = 0
// while(numerosubtraido > 0 ){
//     console.log(`valor de entrada ${numerosubtraido}`);
//     let operacao = numero * numerosubtraido
//     numerosubtraido--
//     console.log(operacao);
//     if(operacao > 0){
//         console.log(`valor atual da operacao: ${operacao}`);
//         valor = valor * operacao
//         console.log(`valor final da operacao: ${valor}`);
//     }
//     console.log(`valor de saída ${numerosubtraido}`);
// }
// console.log(valor)

let numero = 4

let antecessor = numero - 1
let valor = numero * antecessor
while(valor != 0){
    console.log(`valor de entrada: ${antecessor}`);
    valor = valor * antecessor 
    console.log(valor);
    antecessor--
}