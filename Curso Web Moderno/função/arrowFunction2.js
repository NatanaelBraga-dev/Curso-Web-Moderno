//aula 96

//Aqui nesta aula vamos utilizar um exemplo já usado na primeira aula de função '.bind'
//porém dessa vez utilizaremos uma arrowfunction para incrementar a variável definida 
//usar uma arrowfunction faz com que o this tenha um valor não variável
//sendo assim ele será definido pelo contexto onde está inserido, assim não precisaremos usar o 'bind'

function pessoa(){
    this.idade = 0

    setInterval( () => {
        this.idade++
        console.log(this.idade);
    }, 1000 )
}

new pessoa 

