//aula 107 


/**
 * na aula 106 o professor pediu que criassemos uma função factory
 * que retornasse um objeto com as caracteristicas de um produto
 * nome , valor e uma propriedade chamada desconto 
 * 
 * abaixo vai meu código
 */

function criarProduto(nomeProduto, preçoProduto){

    desconto = (preçoProduto * 70) / 100
    valorDescontado = preçoProduto - desconto

    return{
        nome: nomeProduto,
        preço: preçoProduto,
        valor_com_desconto: valorDescontado
        
    }

}

console.log(criarProduto('tênis da Nike', 340))

//aqui vai a forma que o professor escreveu:

function produto(nome,valor){
    return{
        nome,
        valor,
        desconto: 0.1
    }
}

console.log(produto('tenis da Adidas', 300));