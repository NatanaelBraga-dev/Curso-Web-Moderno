//aula 97

/**
 * nessa aula veremos como um 'this' de uma arrowfunction reaje quando a função
 * que ele pertence é invocada usando '.bind(obj)'
 * 
 * A duvida é... será que o 'this' permanecerá com o contexto onde está inserido
 * ou ele vai mudar quando tentamos invoca-lo de um outro contexto ? 
 * 
 * Além disso também serão feitos outros testes usando o 'this'
 */

let comparaComThis = function(param){//função que chama param e compara com 'this'
    console.log(this === param);
}

comparaComThis(global)//comparando obj global com 'this'

const obj ={}
comparaComThis = comparaComThis.bind(obj)//atribuindo uma função a outra, que usa 
//o objeto criado como parametro
comparaComThis(global)//repare que agora o 'this' não pertence mais ao context global
comparaComThis(obj)//o 'this' pertence ao contexto do objeto isso porque a função foi criada 
//de forma explicita


//veremos como o 'this' reaje no contexto de uma arrowfunction
let comparaComThisArrow = param => console.log(this === param);//arrowfunction
comparaComThisArrow(global)
comparaComThisArrow(module.exports)//module.exports é o contexto original onde o
// 'this' pertence 

//agora vamos tentar mudar o contexo do 'this' de uma arrowfunction usando .bind

//e isso não irá dar certo. A arrowfunction é mais forte que o bind

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)//note que 'this' não é estritamente igual ao objeto
comparaComThisArrow(module.exports)//o contexto ainda é true para module.exports
