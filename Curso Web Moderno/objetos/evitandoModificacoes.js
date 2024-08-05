//Object.preventExtensions (previni que novos atributos sejam criados)

const produto = Object.preventExtensions(
    {
        nome: 'Qualquer',
        preco: 1.99,
        tag: 'promoção'
    }
)

console.log('Extensivel', Object.isExtensible(produto));

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca '
delete produto.tag
console.log(produto);

//Object.seal

const pessoa = {
    nome: 'Juliana',
    idade: 35
}

Object.seal(pessoa) //não da pra add atributos nem excluir porém pode modificar

console.log('Selado:', Object.isSealed(pessoa));
pessoa.sobrenome = "Silva"
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa);

//Object.freeze não da pra excluir, adicionar ou modificar 