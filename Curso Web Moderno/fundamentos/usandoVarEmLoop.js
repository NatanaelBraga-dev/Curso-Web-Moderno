/**
 * No caso abaixo vamos ver o funcionamento do tipo de variável 'var' quando utilizamos ela em um loop
 */
for (var i = 0; i < 10; i++) {
    console.log(i)
}
//Note que o tipo 'var' poderá ser utilizado fora do escopo ácima pois ele não tem escopo de bloco sendo assim qual será o valor
//setado para var do lado de fora do loop ?
console.log('i = ', i)

/**
 * Note que o valor printado foi 10. Isso porque 10 foi o valor que fez com que a variável i saísse de dentro do loop
 * e isso faz com que ela assuma esse valor.
 */

