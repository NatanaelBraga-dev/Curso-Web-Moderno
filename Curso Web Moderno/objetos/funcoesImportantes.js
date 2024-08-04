// funções interessantes do Object
// ex: .freeze

const Pessoa ={
    nome:'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(Pessoa)); //pega todas as chaves do objeto
console.log(Object.values(Pessoa)); //retorna os valores do objeto
console.log(Object.entries(Pessoa)); //retorna os pares chave e valor dentro de arrays

Object.entries(Pessoa).forEach(([chave, valor]) => { //usando o destructuring
    console.log(`${chave}: ${valor}`);
})

Object.defineProperty(Pessoa, 'dataNascimento', { //define propriedades e suas caracteristicas
    enumerable: true,//essa propriedade pode ser listada ?
    Writable: false,//essa propriedade pode ser modificada ?
    value: '01/02/2019'//valor da propriedade
})

Pessoa.dataNascimento = '01/01/2017'
console.log(Pessoa.dataNascimento);
console.log(Object.keys(Pessoa));

// Object.assign (ECMAScript 2015)

const destino ={a: 1}
const o1 = {b: 2}
const o2 = {c: 3 , a: 4}
const obj = Object.assign(destino, o1, o2) // concatena os objetos passados no primeiro que tiver sido passado

console.log(obj);

Object.freeze(obj)
obj.c = 1234
console.log(obj);


