/**
 * Aqui mostramos que no caso do tipo de variável 'var' podemos utiliza-la em diversos escopos do código.
 * No caso a seguir mostramos que mesmo fora do escopo iremos conseguir acessar seu valor
 */
{
     {
         {
             {
                 { 
                    var sera = 'será???' 
                    console.log(sera)
                } 
            } 
        } 
    }
 }

console.log(sera)

/**
 * No caso abaixo testamos que não conseguimos acessar o valor de uma variável 'var' se estivermos chamando ela de fora de uma
 * função. 
 */
function teste(){
    var local = 123
}

teste()
console.log(local)

/**
 * Resumindo ao declararmos uma variável com var dentro de uma função ela só é visivel dentro do escopo da função, mas criarmos
 * ela fora de uma função ela é visivel de forma global no código. 
 * Isso pode ser ruim porque se vc está mexendo no código com mais de uma pessoa, algum dos dois pode acabar usando o mesmo nome
 * de uma variável de forma global dessa forma sobrescrevendo a anterior
 */