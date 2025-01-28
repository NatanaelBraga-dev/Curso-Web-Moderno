function falarDepoisDe(segundos, frase){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    })
}

falarDepoisDe(3,'Massa Demais')
    .then(frase => frase.concat('!!'))
    .then(frase => console.log(frase))
    .catch(e => console.log(e)) //chamada somente quando ocorrer um erro ou seja quando o reject for chamado pela promisse