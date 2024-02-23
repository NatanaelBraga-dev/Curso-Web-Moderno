//criar de forma literal

function fun1() {}

//armazenar em uma variável 

const fun2 = function() {}

//armazenar em um array

const array = [function (a,b){return a+b},fun1,fun2]

console.log(array[0](2,3));

//armazenar em atributos de objetos 

const obj = {}
obj.falar = function () {return 'Opa'}
console.log(obj.falar())

//passar uma função com parametro para outra função
function run(fun){
    fun()
}

run(function (){console.log('Executando...')})

//uma função pode retornar/conter uma função

function soma(a, b) {
    return function(c) {
        console.log(a + b + c)
    }
}

//como invocar essa função ?
soma(2,3)(4)