//construir uma tabuada 

for(let contador = 0;contador <= 10; contador++){
    for(let numero = 1; numero <= 9; numero++){
        let multiplicação = numero*contador
        console.log(`${contador} x ${numero} = ${multiplicação}`);
    }
}