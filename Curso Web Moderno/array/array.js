console.log(typeof Array, typeof new Array, typeof []);

let aprovados = new Array('Bia','Carlos','Ana')
console.log(aprovados);

aprovados = ['Bia','Carlos','Ana']
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);
console.log(aprovados[3]);

aprovados[3] = 'Paulo'
aprovados.push('Abia')
console.log(aprovados.length);

aprovados[9] = 'Rafael' //indices 5,6,7,8 undefined

console.log(aprovados.length);
console.log(aprovados[8] === undefined) //true

console.log(aprovados);

aprovados.sort() //re-ordena os itens no array
console.log(aprovados);

delete aprovados[1] //não re-ordena os itens do array
console.log(aprovados[1]);
console.log(aprovados[2]);

aprovados = ['Bia','Carlos','Ana']
aprovados.splice(1,2, 'Elemento1', 'Elemento2') //adicionar e remover itens separadamente ou ao mesmo tempo
console.log(aprovados);
