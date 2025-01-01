/**
 * crie uma função que recebe dois parametros, o primeiro é a quantidade de horas trabalhadas por um funcionário
 * o outro é o valor a ser recebido p/horas
 * 
 * o retorno da função deve ser a string: "Salário igual a R$ X" em que "x" é o valor total recebido pelas
 * horas trabalhadas
 */

const calcularSalario = function(horasTrabalhadas, valorHora){
    return console.log(`Salário igual a R$ ${horasTrabalhadas * valorHora}`);
}

calcularSalario(150, 40.5)