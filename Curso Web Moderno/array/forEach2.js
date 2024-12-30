//implementando nosso próprio forEach
Array.prototype.forEach2 = function(callback){
    for (let i = 0; i < this.length; i++){
        callback(this[i], i, this)
    }
}

const aprovados = ['Agatha','Aldo','Daniel','Raquel']

aprovados.forEach2(function(nome,indice){ //a função é chamada para cada item que for percorrido pelo forEach
    console.log(`${indice + 1}) ${nome}`);    
})
