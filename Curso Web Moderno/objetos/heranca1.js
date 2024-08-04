// herança é um conceito utilizado quando visamos a reutilização de código evitando o ctrl 'c' e 'v'

const ferrari = {
    modelo: 'F40',
    velMax: 324,
}

const volvo = {
    modelo: 'V40',
    velMax: 200,
}

console.log(ferrari.__proto__);
console.log(ferrari.__proto__ === Object.prototype);
console.log(volvo.__proto__ === Object.prototype);
//Object.prototype é o protótipo do meu objeto. É como se fosse o pai do meu object ele existe porém está vazio

console.log(Object.prototype.__proto__);
//tentamos acessar o protótipo do Object.prototype porém por ele ser o protótipo de escala mais alta não existe um protótipo antes dele

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto);
console.log(Object.prototype, MeuObjeto.prototype);