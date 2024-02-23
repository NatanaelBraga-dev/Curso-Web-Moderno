/**
 * exercicio 02
 * 
 * crie uma funcao que recebe 3 medidas para cada lado de um triangulo
 * e retorne sua classificação (equilátero, isósceles ou escaleno)
 */

function verificaClassificacao(lado1, lado2, lado3){
    if(lado1 === lado2 & lado2 === lado3){
        console.log('Esse é um triângulo equilátero');
    }
    if(lado1 != lado2 & lado1 != lado3 & lado2 != lado3){
        console.log('Esse é um triângulo escaleno');
    }
    if(lado1 === lado2 & lado1 != lado3 || lado2 === lado3 & lado1 != lado3 || lado1 === lado3 & lado2 != lado3){
        console.log('Esse é um triângulo isósceles');
    }
}

verificaClassificacao(2,2,2)
verificaClassificacao(2,3,1)
verificaClassificacao(2,3,3)