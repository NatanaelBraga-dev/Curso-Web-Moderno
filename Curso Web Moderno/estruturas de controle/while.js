/**
 * neste arquivo é aprensentado por meio de um exemplo o laço de repetição 'while'
 * 
 * abaixo criamos uma função que recebe valor minimo e valor máximo e a partir disso gera numeros que estão entre esses dois extremos
 * 
 */
function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0 
/**
 * abaixo criamos um laço de repetição que vai ficar rodando a função ácima até que se gere o número '-1' e depois disso
 * o laço será interrompido pois sua condição para rodar será verdadeira
 */
while(opcao != -1) {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`);

}

console.log('Até a próxima');