/**
 * exercicio 07
 * 
 * elabore uma função cujo objetivo é resolver a formula de bhaskara
 * para isso a função deverá receber 3 parametros ax^2, bx, e c
 * 
 * de forma que na equação: 3x^2 - 5x + 12 os valores sejam respectiavmente: -3, 5, 12
 * 
 * como retorno deve ser passado um valor que tem 2 vetores um para cada possivel resultado,
 * mesmo que sejam iguais
 * 
 * caso o delta seja negativo retorne ao em vez do vetor uma string com a frase
 * "Delta é negativo"
 */

function calculaEquacaoSegundoGrau(A,B,C){
    let resultados = []

    if(A === 0 || B === 0 || C === 0){
        console.log('não são aceitos valores nulos');
    }
    else{
        let delta = B**2 - 4*(A * C)
        
        if(delta  < 0){
            console.log('delta é negativo, valor do delta:',delta);
        }
        else{
            let raizDelta = Math.sqrt(delta)
            let x1 = ((-B) + raizDelta) / (2 * A)
            let x2 = ((-B) -  raizDelta) / (2 * A)
            resultados.push(x1.toFixed(2))
            resultados.push(x2)
            console.log('valores dos resultados: ',resultados);
        }
    }
}

calculaEquacaoSegundoGrau(2,2,2)
calculaEquacaoSegundoGrau(-3,5,12)

//Math.sqrt(argumento) "serve para calcular a raiz quadrada do argumento passado"
//array.push(argumento) "serve para adicionar um item na ultima posição do array"

