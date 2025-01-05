/**
 * escreva uma função que receba dois arrays, os una usando concat e remova os valores duplicados
 * use filter ou reduce para garantir que não tenha duplicatas no final
 */

const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];

const mergeAndRemoveDuplicates = function(array1, array2){
    let arrayConcatenado = array1.concat(array2)
    arrayConcatenado.filter(function(itens){
        let qttdDeVezes = 0
        let localizacao = arrayConcatenado.indexOf(itens)
        for (let elemento in arrayConcatenado) {
            if(itens === arrayConcatenado[elemento]){
                qttdDeVezes++
            }
            if(qttdDeVezes > 1){
                arrayConcatenado.splice(localizacao,1)
                qttdDeVezes = 0
            }
        }
    }
)
    return console.log(arrayConcatenado);
}

mergeAndRemoveDuplicates(array1,array2)