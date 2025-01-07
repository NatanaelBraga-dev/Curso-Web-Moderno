require('./global')
//dessa forma estamos disponibilizando o conteudo do arquivo global.js em todo o escopo do nosso projeto
console.log(minhaApp.saudacao());

minhaApp.nome = 'Eita !' //pode ser alterado
console.log(minhaApp.nome);