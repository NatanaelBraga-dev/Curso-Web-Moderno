//aula 105 

//Clousure é o escopo criado quando uma função é declarada
//Esse escopo permite a função acessar e manipular variáveis externas a função

//Contexto léxico em ação

const x = 'Global'

function fora() {
    const x = 'Local'
    
    function dentro() {
        return x 
    }

    return dentro
}

/**
 * Criamos uma função ("fora") e dentro dela criamos uma outra função ("dentro")
 * que vai retornar o valor de 'x'
 *
 * E a mesma vai ser retornada no corpo da função ("fora")  
 */

const minhaFuncao = fora()
console.log(minhaFuncao());

/**
 * criamos uma constante que recebe a função fora e logo depois é executada
 * 
 * A pergunta é... o valor retornado pela função ("dentro") vai ser definido pelo
 * contexto onde foi escrita (dentro da função "fora") ou ela vai retornar o valor setado no escopo global ?
 * */

//como a função da prioridade para o contexto onde foi declarada ela vai dar prioridade
//para a constante que foi definida no mesmo contexto que ela...

//sendo assim o valor retornado será de "Local"