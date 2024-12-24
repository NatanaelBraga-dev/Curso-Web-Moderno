/**
 * Crie um objeto chamado Livro que tenha as propriedades titulo, autor e ano. Use get e Set para acessar e alterar essas propriedades.
 * Certifique-se de que o ano do livro não pode ser maior que o ano atual
 */

const anoAtual = 2024

class Livro {
    
    constructor(){
        this._titulo = 'none';
        this._autor = 'none';
        this._ano = 'none';
    }

    get Titulo(){
        return this._titulo
    }
    set Titulo(titulo){
        this._titulo = titulo
    }

    get Autor(){
        return this._autor
    }
    set Autor(autor){
        this._autor = autor 
    }

    get Ano(){
        return this._ano
    }
    set Ano(ano){
        if(ano <= anoAtual){
            this._ano = ano
        }
        else{
            console.log('o ano de lançamento: '+ano+' é inválido')
        }
    }
}

const Livro1 = new Livro()
Livro1.Ano = 2024
Livro1.Autor = 'Stephen King'
Livro1.Titulo = 'Mr.Mercedes'

console.log(Livro1)
Livro1.Ano = 2025