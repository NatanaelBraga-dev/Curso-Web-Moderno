//aula 93

const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao);//esse é um exemplo mais voltado para a orientação a objeto de como se utilizar do 'this'
    }//note que ao usar a palavra 'this' por estar se referenciando ao objeto 'pessoa' ele pode acessar o atributo 'saudacao'
}//isso acontece porque a função que ele está inserido 'falar' pertence ao objeto 'pessoa'

pessoa.falar()

const falar = pessoa.falar//aqui eu estou armazenando a função 'falar' dentro de uma constante.
falar()//voce irá perceber que ao chamarmos essa função ela retornará 'undefined', isso acontece pelo seu contexto
//não estar mais definido ou seja o 'this' não está se referenciando mais ao objeto criado

// MANEIRA CORRETA //

const falarDePessoa = pessoa.falar.bind(pessoa)/**note agora que estamos fazendo o mesmo processo... 
armazenando a função dentro de uma constante. 
porém dessa vez usaremos a função '.bind(objeto)' , para referenciar o nosso 'this'
fazendo assim com que ele consiga acessar o atributo 'saudacao' do objeto 'pessoa' */
falarDePessoa()