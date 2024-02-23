/**
 * Aqui vai um exemplo muito interessante mostrando ainda o funcionamento do tipo 'var' dentro de um loop
 */
const funcs = []
/**
 * note que abaixo vamos criar um loop que vai incrementar de 0 até 9 o valor de i. e depois disso vamos adicionar um método push
 * para adicionar os valores que seriam printados na função para o nosso Array 'funcs'
 */
for (var i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}
/**
 * Como vimos anteriormente... sabemos que 'var' não tem escopo de bloco e vimos que por isso quando evocamos a variável de tipo
 * 'var' fora do loop ela assume o valor que fez com que ela saísse do loop. Nesse caso não irá ser diferente. Note que ao chamarmos
 * o nosso Arrow a partir de qualquer posição os valores serão os mesmos nesse caso o valor '10'.
 */
funcs[2]()
funcs[8]()