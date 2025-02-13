//devemos utilizar a biblioteca file system juntamente de uma promisse de forma que o resultado da promisse ou seja quando o 
//then for chamado o conteúdo do arquivo seja extraído
//a promisse deve receber um endereço que corresponde ao local do arquivo para que o FS saiba onde buscar as informações

const fs = require('fs')

const caminho = __dirname + '/dados.txt'

const pegarConteudo = function(pathDoArquivo){
    return new Promise((resolve, reject) => {
        if(pathDoArquivo){
                fs.readFile(pathDoArquivo, 'utf8', (err, data) => {
                    if(err){
                        reject(err)
                    }else{
                        resolve(data)
                    }
                }
            )
        }
    })
}

pegarConteudo(caminho)
    .then(conteudo => console.log(conteudo))
    .catch(error => console.log(error))