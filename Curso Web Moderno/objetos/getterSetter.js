const sequencia = {
    _valor: 1, //convenção de restrição (não obriga a variável a ser privada mas mostra aos devs a intenção de deixa-la assim)
    get valor(){
        return this._valor++
    },
    set valor(valor){
        if(valor > this._valor){
            this._valor = valor
        };
    }
}

console.log(sequencia.valor, sequencia.valor ); //apesar das funções terem nomes iguais o JS entende qual chamar porque você está querendo ler um valor
sequencia.valor = 1000 //o JS entende qual chamar porque estamos tentando setar um valor ou alterar um valor
console.log(sequencia.valor, sequencia.valor);
sequencia.valor = 900 //o valor não será alterado por causa da condição colocada na função
console.log(sequencia.valor, sequencia.valor);
