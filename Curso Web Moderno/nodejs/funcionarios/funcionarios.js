//pequeno exercicio durante a aula

const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

// axios.get(url).then(response => {
//     console.log(response.data);
// })

//desafio: obter a mulher chinesa com o menor salário
const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (funcionario, funcionarioAtual) => {
    return funcionario.salario < funcionarioAtual.salario ? funcionario : funcionarioAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    const func = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario)

    console.log(func);
})