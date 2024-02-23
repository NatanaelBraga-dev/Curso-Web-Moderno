//Esse é um exercicio que vai receber um valor a ser sacado e conta a quantidade
//das respectivas notas a serem sacadas

const cedulasPossiveis = [200,100,50,20,10,5,2]

function calculaQuantidadeDeCedulas (valorDeSaque){
    let cedulasDe200 = 0 
    let cedulasDe100 = 0
    let cedulasDe50 = 0
    let cedulasDe20 = 0
    let cedulasDe10 = 0
    let cedulasDe5 = 0
    let cedulasDe2 = 0

    let quantidadecedulas = []

    if(valorDeSaque > 1){
        for(let contador = 0; contador < cedulasPossiveis.length; contador++){
            if(valorDeSaque >= cedulasPossiveis[contador]){
                console.log(`valor atual: ${valorDeSaque} R$`)
                console.log(`valor sacado de: ${cedulasPossiveis[contador]} R$`);
                valorDeSaque = valorDeSaque - cedulasPossiveis[contador]
                console.log("==========================================")
                switch(cedulasPossiveis[contador]){
                    case 200:
                        cedulasDe200 ++
                        quantidadecedulas.push(cedulasDe200)
                        break
                    case 100:
                        cedulasDe100++
                        quantidadecedulas.push(cedulasDe100)
                        break
                    case 50:
                        cedulasDe50 ++
                        quantidadecedulas.push(cedulasDe50)
                        break
                    case 20: 
                        cedulasDe20 ++
                        quantidadecedulas.push(cedulasDe20)
                        break
                    case 10:
                        cedulasDe10 ++
                        quantidadecedulas.push(cedulasDe10)
                        break
                    case 5:
                        cedulasDe5 ++
                        quantidadecedulas.push(cedulasDe5)
                        break
                    case 2:
                        cedulasDe2 ++
                        quantidadecedulas.push(cedulasDe2)
                        break
                }
                // console.log(quantidadecedulas)
            }
            else{
                continue
            }  

        }
        // console.log(`notas de 200 utilizadas: ${cedulasDe200}`);
        // console.log(`notas de 100 utilizadas: ${cedulasDe100}`);
        // console.log(`notas de 50 utilizadas: ${cedulasDe50}`);
        // console.log(`notas de 20 utilizadas: ${cedulasDe20}`);
        // console.log(`notas de 10 utilizadas: ${cedulasDe10}`);
        // console.log(`notas de 5 utilizadas: ${cedulasDe5}`);
        // console.log(`notas de 2 utilizadas: ${cedulasDe2}`);

        for(let contador2 = 0; contador2<quantidadecedulas.length; contador2++){
            console.log(`quantidade de ${contador2} usadas: ${quantidadecedulas[contador2]}`)
        }

    }
}

calculaQuantidadeDeCedulas(132)