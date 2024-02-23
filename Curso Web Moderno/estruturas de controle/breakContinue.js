//break funciona em while, for e switch 
//continue funciona em while e for

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

/**
 * O break tem a função de sair do bloco mais próximo encontrado e pular para a próxima linha de código
 */
for (x in nums){
    if (x == 5){
        break
    }
    console.log(`${x} = ${nums[x]}`)
}

/**
 * O continue tem o funcionamento de pular uma etapa do funcionamento do código sem sair do bloco mais próximo apenas pulando para
 * a próxima etapa observe abaixo que ao encontrar o indice '5' ele pula para o '6'
 */
for ( y in nums ){
    if (y == 5){
        continue
    }
    console.log(`${y} = ${nums[y]}`)
}

