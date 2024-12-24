/**
 * Crie uma classe Produto que possui as propriedades nome, preço e quantidade.
 * adicione os métodos:
 * get para calcular o valor total do estoque (preco * quantidade)
 * set que atualize o preco, mas só permita valores positivos
 */

class Produto {
    constructor(nome,preco,quantidade){
        this._nome = nome;
        this._preco = preco;
        this._quantidade = quantidade;
    }

    get quantidade(){
        return this._quantidade
    }
    set quantidade(quantidade){
        this._quantidade = quantidade
    }

    get nome(){
        return this._nome
    }
    set nome(nome){
        this._nome = nome
    }

    get preco(){
        return this._preco
    }
    set preco(preco){
        if (preco > 0){
            this._preco = preco
        }
        else{
            console.log('O preço '+preco+' é inválido');
        }
    }

    get valorEstoque(){
        return (
             this._quantidade * this._preco
        )
    }
}

const Carro = new Produto("Carro",2.5,100)
console.log(Carro.valorEstoque);
Carro.preco = 0