//abordando nuancias do this
console.log(this === global);
console.log(this === module);

console.log(module.exports === this);
console.log(this === exports);

function logThis(){
    console.log('Dentro de uma função');
    console.log(this === exports);
    console.log(this === module.exports);
    console.log(this === global);
}

logThis()