
const add = Number(process.argv[2]) + Number(`${process.argv[3]}`)
const sub = Number(process.argv[2]) - Number(`${process.argv[3]}`)
const mult = Number(process.argv[2]) * Number(`${process.argv[3]}`)
const div = Number(process.argv[2]) / Number(`${process.argv[3]}`)


console.log(`A soma é igual a ${add}`)
console.log(`A subtração é igual a ${sub}`)
console.log(`A multiplicação é igual a ${mult}`)
console.log(`A divisão é igual a ${div}`)