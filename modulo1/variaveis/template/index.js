//Exercícios de interpretação de código

/*
1. console.log(10, 5)

2. a variavel c não foi definida

3. 
let workHour = prompt("Quantas horas você trabalha por dia?")
let workPayment = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${workPayment/workHour} por hora`)
*/

//Exercícios de escrita de código

/*
let nome 
let idade 

console.log(typeof idade)
console.log(typeof nome)

d) IMPRIMIU undefined, pois não declarei nenhum valor
f) IMPRIMIU duas strings, para imprimir number, tenho que converter para valor number

let nome = prompt ("Qual o seu nome?")

let idade = prompt ("Qual a sua idade")
//console.log(typeof nome,  idade)

*/
let nome = prompt ("Qual o seu nome?")
let idade = prompt ("Qual a sua idade")

console.log("Olá " + nome + "  você tem " + idade + " anos")
// let user = alert (`Olá ${nome} , você tem ${idade} anos`) - uma outra forma que funcionou 

// 2. ESCREVA PERGUNTAS DE SIM OU NÃO - VARIÁVEIS

let ask1 = prompt("Você está aí?")
console.log("Você está aí - " + ask1)

let ask2 = prompt("Você usa Linkedin?")
console.log("Você usa Linkedin? - " + ask2)

let ask3 = prompt("Você gosta de sorvete?")
console.log("Você gosta de sorvete? - " + ask3)

// Questão 3 

let a = 10
let b = 25
let c = 

c = a
a = b
b = c
// Aqui utilizamos o c vazio para efetuarmos as trocas

// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10