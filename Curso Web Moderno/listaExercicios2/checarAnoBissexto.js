/**
 * desenvolver uma função que recebe um valor equivalente a um ano e retornar se ele é bissexto ou não ?
 */

const checarAnoBissexto = function (ano) {
    if (ano % 400 === 0) {
        return ano + " é bissexto";
    } else if (ano % 100 === 0) {
        return ano + " não é bissexto";
    } else if (ano % 4 === 0) {
        return ano + " é bissexto";
    } else {
        return ano + " não é bissexto";
    }
};

console.log(checarAnoBissexto(2100));
console.log(checarAnoBissexto(2020));