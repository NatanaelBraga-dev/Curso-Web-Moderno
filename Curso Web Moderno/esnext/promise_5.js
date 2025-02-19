//tratamento de erros em promisses 

function funcionarOuNao(valor, chanceErro){
    return new Promise((resolve, reject) => {
        try {
            con.log('temp') //forçando o tratamento
            if(Math.random() < chanceErro){
                reject('Ocorreu um Erro')
            }else {
                resolve(valor)
            }
        } catch(e){
            reject(e)
        }
    })
}

funcionarOuNao('Testando...', 0.5)
    .then(v => `Valor: ${v}`)
    .then(
        v => consol.log(v),
        err => console.log(`Erro Esp.: ${err}`)
    )
    .then(() => console.log("Quase Fim"))
    .catch(err => console.log(`Erro Geral : ${err}`))
    .then(() => console.log("Fim!"))