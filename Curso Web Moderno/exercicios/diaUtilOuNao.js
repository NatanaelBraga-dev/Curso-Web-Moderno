//exercicio 13
/**
 *  Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao dia.
 *  Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
 */

function diaUtilOuNao(dia){
    switch(dia){
        case 1: case 7:
            console.log("Não é dia útil")
            break
        case 2: case 3: case 4: case 5: case 6: 
            console.log("É dia útil")
            break
        default:
            console.log("dia inválido. Os dias válidos são valores entre 1 e 7");
            
    }
}

diaUtilOuNao(7)
diaUtilOuNao(3)
diaUtilOuNao(20)