//aula 104

//contexto léxico é o contexto onde o trecho de código foi declarado

//uma função tem 'consciencia' do contexto onde foi declarada

const valor = 'Global'

//abaixo declaramos uma função no contexto global do código

function minhaFuncao() {
    console.log(valor);
}
/**
 * acima criamos uma função que imprime uma constante chamada 'valor' 
 * 
 * abaixo criamos uma função que vai executar a função declarada anteriormente
 * 
 * além disso criamos duas constantes contendo o mesmo nome de identificação = 'Valor'
 * uma no escopo global, e outra no contexto onde foi chamada a função
 *  
 * a duvida é...
 * 
 * Para qual contexto a função irá dar prioridade ? Qual será o valor retornado ?    
 */
function exec(){
    const valor = 'Local'
    minhaFuncao()
}

exec()

/**
 * como resultado a função da prioridade para a constante que foi declarada 
 * no contexto global que é o mesmo contexto que foi declarada a função 
 */