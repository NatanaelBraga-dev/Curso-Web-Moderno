//Função sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)//Ao passarmos apenas 1 parâmetro para uma função que pede 2 o parametro não passado assumirá o valor de undefined isso vai nos retornar um NaN
imprimirSoma()//Vai retornar um NaN pois não passamos parâmetros

//Função com retorno
function soma(a, b = 0){//Nessa função definimos que o valor padrão para b é 0 sendo assim se b não for passado seu valor será 0
    return a + b 
}

console.log(soma(2,3))
console.log(soma(2))