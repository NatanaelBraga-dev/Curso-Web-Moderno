//ES 8 Object.values / Object.entries
const objeto = {
    a: 1,
    b: 2,
    c: 3
}

console.log(Object.values(objeto));
console.log(Object.entries(objeto));

// melhorias na Notação Lite 
const nome = "Carla"
const pessoa = {
    nome, //passou o atributo com a variável nome
    ola(){
        return 'Ola'
    }
}

console.log(pessoa.nome, pessoa.ola());

// Class
class Animal{}
class cachorro extends Animal{
    falar(){
        return 'au au'
    }
}

console.log(new cachorro().falar);