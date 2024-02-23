/**
 * Neste arquivo executamos um exemplo onde mostramos o funcionamento da estrutura de controle 'switch'
 */
const imprimirResultado = function (nota) {
    //O 'Switch' não recebe um valor boolean.
    switch (Math.floor(nota)) {
        case 10: //podemos colocar a estrutura do código de forma que se o valor inserido for 10 ou 9 ambos irão executar a mesma
                //sentença de código
        case 9:
            console.log('Quadro de Honra');
            break //esse break é necessário pois caso não tenha. quando estivemos executando o código quando ele entrar no case
                  //todos os outros abaixo serão executados por isso a palavra break precisa ser usada para parar a execução.
        case 8: case 7:
            console.log('Aprovado');
            break
        case 6: case 5: case 4:
            console.log('Recuperação');
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado');
            break
        default: //é um valor padrão que será executado caso seja inserido um valor que não entre em nenhum case.
                 // pode ser inserido em qualquer posição no switch porém precisrá colocar o break
            console.log('Nota Inválida')
        
    }
}

imprimirResultado(10)
imprimirResultado(3)