//mecanismos de tratamento de erros


function tratarErroElancar(erro) {
    // 'throw' é utilizado para lançarmos um erro no
    //caso algo aconteça de forma errada essa é a forma de lançarmos para o user
    // o que aconteceu
    // throw new Error('...')
    // throw 10
    throw{
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj){
    //O 'Try' é utilizado quando julgamos que determinado bloco de código
    //pode acabar gerando um erro como fizemos abaixo
    try{
        console.log(obj.name.toUpperCase() + '!!!');
    }
    //O 'Catch' será utilizado sempre que ocorre o erro. Então se algo
    //ocorrer o catch será acionado
    catch (e){
        tratarErroElancar(e)
    }
     //O 'finally' é algo que será utilizado de qualquer forma. Dando erro
     //ou não o finally será executado no código
    finally{
        console.log('final');
    }
}

//obs: O erro acontece porque chamamos o parametro abaixo 'nome' sem ele estar
//definido na função. O real parâmetro é o 'name'

const obj = { nome: 'Roberto'}
imprimirNomeGritado(obj)
