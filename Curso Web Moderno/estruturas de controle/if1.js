function soBoaNoticia(nota){
    if(nota >= 7){
        console.log('aprovado com ' + nota);
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.1)

function seForVerdadeEuFalo(valor){
    /**
     * Ao passarmos um valor sem nenhum tipo de comparação para a estrutura de controle 'if' (como no exemplo abaixo) ele irá 
     * automaticamente transformar esse valor para boolean o que o fará pensar se o valor é verdadeiro ou falso sem precisarmos
     * explicitamente efetuarmos essa comparação
     */
    
    if(valor){
        console.log('É verdade... ' + valor);
    }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1, 2])
seForVerdadeEuFalo({})
