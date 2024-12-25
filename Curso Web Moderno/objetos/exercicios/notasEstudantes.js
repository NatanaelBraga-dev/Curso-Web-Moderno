/**
 * crie uma classe estudante com as propriedades nome e nota(um array de numeros de 0 a 10). adicione:
 * um get que calcule a média das notas
 * um set que permita adicionar uma nova nota mas somente se ela etiver no intervalo de 0 a 10
 * um método status que retorna 'aprovado' se a média for maior ou igual a 7 e 'reprovado' caso contrário
 */

class Estudante {
    
    constructor(nome){
        this._nome = nome;
        this._nota = [0,1,2,3,4,5,6,7,8,9,10];
        this.notasEscolhidas = []
        
    }

    status(){
        const media = this.mediaNotas
        return media>=7 ? 'Aprovado' : 'Reprovado'
    }

    set adicionarNota(nota){
        if(this._nota.includes(nota)){
            this.notasEscolhidas.push(nota)
            console.log(this.notasEscolhidas);
        }
        else{
            console.log('nota inválida');
        }
    }

    get mediaNotas(){
        let totalNotas = 0
        for(let i in this.notasEscolhidas){
            totalNotas = this.notasEscolhidas[i] + totalNotas
        }
        let mediaFinal = totalNotas/this.notasEscolhidas.length        
        return(
            mediaFinal
        )
    }
}

const Natan = new Estudante('Natan')
Natan.adicionarNota = 9
Natan.adicionarNota = 10
Natan.adicionarNota = 8

console.log(Natan.mediaNotas)
console.log(Natan.status())