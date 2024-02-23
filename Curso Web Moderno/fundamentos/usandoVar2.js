var numero = 1 
{
    var numero = 2 
    console.log('dentro = ',numero)
}

console.log('fora = ',numero)

/**
 * No caso acima podemos perceber que pelo var não estar dentro de um escopo de uma função e assumir o escopo global
 * nós acabamos sobrescrevendo o valor da variavel 1 por 2 e assim chamando o mesmo valor dentro e fora do bloco de código criado.
 */