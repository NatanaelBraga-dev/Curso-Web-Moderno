/**
 * No exemplo abaixo criamos um 'if' sem definir seu corpo usando '{}', o que acontece quando fazemos isso ?
 * bem nesse caso, note que o 'num' quando é maior que 7, continua sendo impresso.
 * Isso acontece porque mesmo que nós não definamos o corpo do 'if' ele vai continuar interpretando a primeira sentença de código
 * que vier logo a sua frente.
 * 
 * Porém, caso seja de seu desejo escrever 2 ou mais sentenças de código seguindo a regra do 'if' definido, você obrigatoriamente
 * vai precisar usar as '{}'
 */
function teste1(num){
    if( num>7 )
        console.log(num);
        console.log('final');
}

teste1(6)
teste1(8)

//obs: não usar o ';' na definição das estruturas de controle