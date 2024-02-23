/**
 * No javascript é possivel você chamar parâmetros para uma função mesmo que ela não tenha parametros declarados
 */
function soma(){
    let soma = 0
    for(i in arguments){ //variavel 'i' corresponde aos indices dos elementos percorridos no array arguments
        soma += arguments[i] //a palavra 'arguments' corresponde a um array contendo os valores de todos os parametros passados
    }
    return soma
}

console.log(soma())
console.log(soma(1));
console.log(soma(1.1,2.2,3.3));

console.log(soma(1.1,2.2,"Teste"));
console.log(soma('a','b','c'));