/**
 * O let possui uma diferença muito importante em relação ao var. A diferença é que o let possui uma diferenciação de escopo
 * a mais do que o var. O let possui escopo globol, de função e de bloco como poderemos ver abaixo
 */
let numero = 1 
//Abaixo criamos um escopo usando chaves
{
    let numero = 2 
    console.log('dentro = ',numero)
}
/**
 * ácima podemos perceber que ao em vez de pegar o valor 1 setado no escopo global o let deu preferencia para o valor setado
 * no escopo mais próximo ou menor. Ou seja a leitura (procura) dos valores começa de dentro do menor escopo para o maior escopo
 * por isso que o valor printado dentro será 2 ao em vez de 1
 */

console.log('fora = ',numero)

