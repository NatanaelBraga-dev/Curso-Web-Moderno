/**
 * neste arquivo mostraremos a estrutura do/while
 * 
 * a diferença dessa estrutura para o while comum é que ela obrigatoriamente vai executar o laço pelo menos 1 unica vez
 * já o while pode ser que seja ou não executado pois ele tem uma condição
 */
function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0 

do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`);

} while(opcao != -1)

console.log('Até a próxima');