/**
 * exercicio 06
 * 
 * nesse exercicio devemos criar duas funções que vão receber por parametro:
 * capital inicial, taxa de juros e tempo de aplicação.
 * 
 * a primeira retornará o montante sob regime de juros simples e a segunda
 * retornará sob regime de juros compostos
 */

function montanteJurosSimples(capitalInicial,taxaMensal,tempoMensal){
    let juros = capitalInicial * (taxaMensal/100) * tempoMensal
    let montante = capitalInicial + juros
    console.log(`O montante em juros simples é igual á: ${montante}`);
}

montanteJurosSimples(500,10,1)

function montanteJurosCompostos(capitalInicial,taxaMensal,tempoMensal){
    let montante = capitalInicial * ((1 + (taxaMensal/100))**tempoMensal)
    console.log(`O montante em juros compostos é igual á: ${montante.toFixed(2)}`);

}

montanteJurosCompostos(1400,7,2)