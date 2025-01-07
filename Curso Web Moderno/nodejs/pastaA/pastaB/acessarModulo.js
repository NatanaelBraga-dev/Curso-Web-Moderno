const moduloA = require('../../moduloA')
console.log(moduloA.ola);

//quando utilizamos uma importação apenas com a pasta o leitor vai procurar por padrão um arquivo index.js
const c = require('./pastaC')
console.log(c.ola2);
//também é possivel importar módulos internos do Node que já estão previamente disponiveis

const http = require('http')
http.createServer( (req, res) => {
    res.write('Bom dia !')
    res.end()
}).listen(8080)