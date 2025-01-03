//melhorias do Ecma Script 2015

const a = 1
const b = 2
const c = 3

const obj1 = {a: a, b: b, c: c}
const obj2 = {a,b,c} //não precisa mais passar os valores como feito acima
console.log(obj1, obj2)

const nomeAttr = 'nota'
const valorAttr = 7.89

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3);

const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4);

const obj5 = {
    funcao1: function(){
        //...
    },
    function2(){
        //...
    }
}

console.log(obj5);