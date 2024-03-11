//exercicio 16
/**
 * Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe 
 * como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores 
 * numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e 
 * 3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’.  Crie um caso default para operações inválidas.
 */

function calculadora(fator1,operador,fator2){
    switch(operador){
        case "+":
            console.log(`${fator1} + ${fator2} = ${fator1 + fator2}`);
            break
        case "-":
            console.log(`${fator1} - ${fator2} = ${fator1 - fator2}`);
            break
        case "*":    
            console.log(`${fator1} * ${fator2} = ${fator1 * fator2}`);
            break
        case "/":
            console.log(`${fator1} / ${fator2} = ${fator1 / fator2}`);
            break
        default:
            console.log("Operação inválida");
        }
}

calculadora(3,'*',4)