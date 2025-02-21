//aprendendo o uso de async await 

function esperarPor(tempo = 2000){
    return new Promise(function(resolve){
        setTimeout( () => resolve(), tempo )
        })
}

// /**await*/ esperarPor(2000) //await só pode ser usado em funções assincronas em um ambiente Node
//                 .then(() => console.log('Executando promise...'))
//                 .then(esperarPor)
//                 .then(() => console.log('Executando promise...'))
//                 .then(esperarPor)
//                 .then(() => console.log('Executando promise...'))

async function retornarValorRapido(){
    return 20
}

async function executar() {
    let valor = await retornarValorRapido()

    await esperarPor(1500)
    console.log(`async/await ${valor}...`)
    await esperarPor(1500)
    console.log(`async/await ${valor + 1}...`)
    await esperarPor(1500)
    console.log(`async/await ${valor + 2}...`)

    return valor + 3
}

async function executarDeVerdade(){
    const valor = await executar()
    console.log(valor);
}

executarDeVerdade()