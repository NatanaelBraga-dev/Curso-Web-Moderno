/**
 * Aqui estamos usando o método destructuring para atribuir valores aos parametros da função rand
 */
function rand({min = 0, max= 1000}){
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}
//abaixo estão diferentes maneiras de fazer isso
const obj = {max: 50, min: 40}
console.log(rand(obj))

console.log(rand({min:255}))
console.log(rand({}))
