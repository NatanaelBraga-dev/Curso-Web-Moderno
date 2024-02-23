//operadores relcionais tem sempre como resposta verdadeiro ou falso

//comparação de valores
console.log('01)','1' == 1);

//comparação de tipagem e valor
console.log('02)','1'===1);

//diferente
console.log('03)','3'!= 3);

//diferente com tipagem
console.log('04)','3'!== 3);

//menor que
console.log('05)',3<2);

//maior que 
console.log('06)',3>2)

//menor igual
console.log('07)',3<=2);

//maior igual
console.log('08)',3>=2);

//no caso abaixo não irá fazer diferença pois ele vai comparar a localização na memória
const d1 = new Date (0)
const d2 = new Date (0)
console.log('09)',d1 === d2);
console.log('10)',d1 == d2);

console.log('11)',d1.getTime() === d2.getTime());

console.log('12)',undefined == null);
console.log('13)',undefined === null)