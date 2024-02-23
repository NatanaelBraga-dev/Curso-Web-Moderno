//aula 98

// O que é uma função anonima ? é simplesmente uma função declarada sem nome.

const soma = function (x, y){//armazenamos essa função em uma constante
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma){
    console.log(operacao(a,b));//passei os param a e b como valores para o param
    //operacao
}

//note que por padrao o param operacao recebe o valor da função soma 
//que é invocada quando o param operacao não recebe valor explicitamente, como no caso abaixo

imprimirResultado(3, 4)//função soma chamada por padrao... resultado '7'
imprimirResultado(3, 4, soma)//não fará diferença chamar a função soma explicitamente

/**
 * também podemos utilizar uma função anonima como parametro para outra função
 * como fizemos no exemplo abaixo...
 * 
 * note que o comportamento antes esperado era de que quando não passassemos 
 * o terceiro param a função soma fosse chamada...
 * 
 * porem quando passamos uma função como parametro a mesma passará a ser chamada
 */

imprimirResultado(3, 4, function(x, y){
    return x - y
})

imprimirResultado(3, 4, (x, y) => x * y)

//função anonima em objeto
const pessoa = {
    falar: function () {
        console.log('Opa');
    }
}

pessoa.falar()