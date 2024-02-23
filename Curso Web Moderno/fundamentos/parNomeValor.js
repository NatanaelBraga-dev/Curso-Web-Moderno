/**
 * Aqui vemos muito sobre contexto léxico que é basicamente usado para entender porque várias variáveis ao longo do meu código
 * podem ter o mesmo nome sem causar nenhum conflito. 
 * Isso ocorre por causa do contexto léxico. cada variavel possui o contexto léxico de onde está localizada no código
 */
const saudacao = 'Opa' //contexto léxico 1

function exec () {
    const saudacao = 'falaaa' //contexto léxico 2 
    return saudacao
}

//Objetos são grupos aninhados de pares de nome/valor

const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua muito legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(Cliente)