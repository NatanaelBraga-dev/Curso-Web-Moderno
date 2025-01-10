// middleware pattern (chain of responsability)

const passo1 = (contexto, next) => {
    contexto.valor1 = 'mid1'
    next()
}

const passo2 = (contexto, next) => {
    contexto.valor2 = 'mid2'
    next()
}

const passo3 = contexto => contexto.valor3 = 'mid3' 

const exec = (contexto, ...middlewares) => { // ...middlewares consegue pegar vários argumentos passados e coloca-los em um array
    const execPasso = indice => { //estamos executando a função a partir do indice 0 e cada argumento é uma função que está sendo chamada
        middlewares && indice < middlewares.length &&
            middlewares[indice](contexto, () => execPasso(indice + 1)) //aqui. E após isso incrementamos o indice para que a função next sempre vá
    }                                                                  // para o próximo passo ou seja o próximo item no array middleware
    execPasso(0)
}

const ctx = {}
exec(ctx, passo1, passo2, passo3)
console.log(ctx);

//doidera isso aqui kkkkk