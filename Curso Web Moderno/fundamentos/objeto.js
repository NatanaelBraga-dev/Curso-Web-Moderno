//Objeto é um grupo de pares chave valor
const prod1 = {}
prod1.nome = 'Celular Ultra Mega'//Adicona ao prod1 uma chave nome com valor 'Celular Ultra Mega'
prod1.preço = 4998.90//Adiciona ao prod1 uma chave preço com valor 4998.90
prod1['desconto legal'] = 0.40//Evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preço: 79.90,
    obj:{
        blabla: 1,
        
}}//Objetos podem ser criados dentro de objetos

console.log(prod2)