//aula 101

//exemplo de callback no browser

document.getElementsByTagName('body')[0].onclick = function(e){
    console.log('O evento ocorreu');
}//não sou obrigado a declarar o evento caso não vá usa-lo

//esse exemplo de função callback sempre nos retorna a função quando o usuário
//clicar no body do browser...