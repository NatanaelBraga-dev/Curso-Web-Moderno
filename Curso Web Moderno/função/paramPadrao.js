/**
 * Aqui veremos estratégias de como utilizarmos valores padrão em nossos sistemas em javascript
 */

//estrategia 1 para gerar valor padrão


/**
 * No exemplo abaixo o que vai acontecer é que, quando a, b ou c não assumirem valores reais ou verdeiros ou seja 
 * quando forem dados como falsos eles assumiram um valor padrão que é '1'
 */
function soma1(a, b, c){
    a = a || 1
    b = b || 1
    c = c || 1

    return a + b + c
}

//portanto observe abaixo que quando chamamos a função sem nenhum parâmetro todos eles adotam o valor padrão '1'
console.log(soma1(), soma1(3), soma1(1,2,3), soma1(0,0,0))
//o problema é quando colocamos os parâmetros com valor '0' pois a linguagem entende o 0 como sendo falso e por isso
//as variáveis vão assumir o valor padrão '1'

//Estrategia 2, 3 e 4 para gerar valor padrão
function soma2(a, b, c){
    a = a !== undefined ? a : 1 // 'a' é estritamente diferente de undefined ? se sim (?) a = a, se não (:) a = 1 
    b = 1 in arguments ? b : 1 //o indice '1' está em arguments (parametros passados)? se sim(?) b = b, se não (:) b = 1
    c = isNaN(c) ? 1 : c //'c' é um 'Not a Number' (NaN) ? caso sim (?) c = 1, caso não (:) c = c 

    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))

//valor padrão ecmascript 2015 (forma nova e mais convencional)
function soma3(a = 1, b = 1, c = 1){
    return a + b + c
}

console.log(soma3(), soma3(3), soma3(1,2,3), soma3(0,0,0)) 