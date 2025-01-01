/**
 * faça uma função que receba 4 parametros (numero,minimo,maximo,inclusivo)
 * a função irá verifica se o parametro numero está entre o minimo e o maximo, caso o valor inclusivo seja true
 * a função vai tolerar que o numero seja igual ao minimo ou ao maximo 
 * caso seja false a função não irá tolerar se for igual ao minimo ou maximo
 * 
 * O parametro inclusivo é false por padrão
 */

const estaEntre = function(numero,minimo,maximo,inclusivo = false){
    if(inclusivo){
       return numero >= minimo && numero <= maximo ? true : false
    }else{
       return numero > minimo && numero < maximo ? true : false
    }
}

console.log(estaEntre(3,3,150));
console.log(estaEntre(3,3,150,true));