//Operador destructuring. recurso introduzido em 2015
/**
 * Com esse operador nós podemos trabalhar com nossos dados de forma muito mais livre e abrangente 
 * abaixo criamos o objeto pessoa
 */
const Pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}
/**
 * como funciona o destructuring ? Ele basicamente visa extrair o dado de alguma extrutura como Array ou Objeto por exemplo:
 * abaixo vamos extrair as chaves nome e idade do nosso objeto pessoa.
 * 
 * Maneira comum: Pessoa.nomeDoParâmetro
 * 
 * Então a extrutura é a seguinte.
 * 
 * defina o tipo da variavel como const por exemplo. Logo em seguida se vc estiver trabalhando com um objeto abra chaves e coloque
 * dentro delas o nome que identifica os valores do seu objeto separados por virgula, e depois coloque o sinal de atribuição '='
 * e logo após o nome do seu Array ou objeto
 */
const { nome,idade} = Pessoa//basicamente o que ele quer dizer é extraia de Pessoa {nome e idade} logo após eles estão disponiveis de forma global
console.log(nome,idade)

/**
 * abaixo o que estamos fazendo é definindo uma forma alternativa para chamar esses valores. ou seja nome agora é chamado 
 * através de 'n' e idade através de 'i'
 */
const {nome: n, idade: i} = Pessoa
console.log(n, i)

/**
 * abaixo estamos chamando atributos do objeto que não existem. Nesse caso sendo {sobrenome e bemHumorada} além disso estamos
 * definindo um valor padrão para um desses atributos que será utilizado caso ele não exista no objeto.
 * Caso não se defina um valor padrão o valor retornado será 'undefined'
 */
const {sobrenome, bemHumorada = true } = Pessoa
console.log(sobrenome,bemHumorada)

/**
 * abaixo estamos chamando os atrbutos de um objeto que está aninhado com Pessoa.
 */
const {endereco:{logradouro,numero,cep}} = Pessoa
console.log(logradouro,numero,cep)

