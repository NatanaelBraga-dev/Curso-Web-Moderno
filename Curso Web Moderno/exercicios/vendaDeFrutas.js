//exercicio 14
/**
 * Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três 
 * casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com 
 * escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie 
 * também um default, que retornará uma mensagem de erro no console
 */

function venda(fruta){
    switch(fruta){
        case "maça":
            console.log("Não vendemos esta fruta aqui");
            break
        case "kiwi":
            console.log("Estamos com escasez de Kiwi");
            break
        case "melancia":
            console.log("Aqui está, são 3 reais o quilo");
            break
        default:
            console.log("Erro fruta inválida");
        }

}

venda("melancia")
venda("kiwi")
venda("maça")
venda("uva")