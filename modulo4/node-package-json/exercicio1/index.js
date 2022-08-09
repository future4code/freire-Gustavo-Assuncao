// a) Acessamos process. argv[2] para acessar parametros na linha de comando
// b) e  c)
// const age = 7 + process.argv[3]
const valor = Number(7) + Number(`${process.argv[3]}`)
console.log(`Olá, ${process.argv[2]}! Você tem ${process.argv[3]} anos.Em 7 anos você terá ${valor}`)
