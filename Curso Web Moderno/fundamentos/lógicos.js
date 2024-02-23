/**
 * neste arquivo temos um exemplo que tem como objetivo esclarescer o funcionamento
 * dos operadores lógicos
 */
function compras(trabalho1,trabalho2){
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaldavel = !comprarSorvete

    return {comprarSorvete,comprarTv50,comprarTv32,manterSaldavel}
    /**
     * note que acima criamos um objeto sem denominar sua chave. isso se deve a 
     * atualização do javascript 2015 que é experto o bastante para usar o nome
     * da constante como nome de chave valor
     */
}

console.log(compras(true,true));
console.log(compras(true,false));
console.log(compras(false,true));
console.log(compras(false, false));