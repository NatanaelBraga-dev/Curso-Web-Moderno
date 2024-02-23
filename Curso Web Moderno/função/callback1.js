//aula 99

//callback = chamar de volta

//A ideia de uma função callback é que ela seja chamada quando um determinado evento 
//acontecer e ela pode ser chamada varias vezes ou apenas 1 unica vez
//á depender do contexto que se é passada essa função

const fabricantes = ["Mercedes","Audi","BMW"]

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`);
}

//abaixo usamos uma função callback (ForEach)
fabricantes.forEach(imprimir)

fabricantes.forEach(fabricante => console.log(fabricante))
/**
 * Essa função vai percorrer o array e para cada elemento nele encontrado
 * ela  vai chamar a função passada anteriormente (imprimir)
 */
