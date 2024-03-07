//Exercicio 10

/**
 * Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne tru ou false.
 */

function divisivelPor3(numero){
    if(numero % 3 == 0){
        return console.log(true)
    }
    else{
        return console.log(false);
    }
}

divisivelPor3(27)
divisivelPor3(7)