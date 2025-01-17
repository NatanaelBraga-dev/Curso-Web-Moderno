// não aceita repeticao e não é indexado
const times = new Set()
times.add('Flamengo')
times.add('Vasco')
times.add('Sao Paulo').add('Corinthians').add('Palmeiras')

console.log(times);
console.log(times.size);
console.log(times.has('vasco'));
console.log(times.has('Vasco'));
times.delete('Flamengo')
console.log(times.has('Flamengo'));