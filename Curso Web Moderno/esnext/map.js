const tecnologia = new Map()
tecnologia.set('React', {framework: false})
tecnologia.set('angular', {framework: true})

console.log(tecnologia.react);
console.log(tecnologia.get('React').framework);

const chavesVariadas = new Map([
    [function(){}, 'Função'],
    [{}, 'Objeto'],
    [123, 'Numero']
])

chavesVariadas.forEach((chv, val) => {
    console.log(chv, val);
})

console.log(chavesVariadas.has(123));
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123));
console.log(chavesVariadas.size);

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')
chavesVariadas.set(456, 'c')
console.log(chavesVariadas);