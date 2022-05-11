//INTERPRETAÇÃO

//1. Leia o código abaixo. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

//const bool1 = true
//const bool2 = false
//const bool3 = !bool2

//let resultado = bool1 && bool2
//console.log("a. ", resultado) == FALSE

//resultado = bool1 && bool2 && bool3 
//console.log("b. ", resultado) == FALSE

//resultado = !resultado && (bool1 || bool2) 
//console.log("c. ", resultado) == TRUE

//console.log("d. ", typeof resultado) == BOOLEAN

// 2. E 3. Seu colega se aproxima de você falando que o código dele não funciona como devia. 
//Vamos ajudá-lo: consegue perceber algum problema? O que será impresso no console?
//const primeiroNumero = prompt("Digite um numero!")
//const segundoNumero = prompt("Digite outro numero!")

//const num1 = Number(primeiroNumero)
//const num2 = Number(segundoNumero)

//const somar = num1 + num2
//const resultado = Number(soma)
//console.log(somar)

// ESTAVA FALTANDO ELE CONVERTER AS STRINGS EM NÚMEROS, POIS ESTAVA CONCATENANDO

//ESCRITA DE CÓDIGOS 

//alert ("Olá, Seja bem-vindo")

//let idade = prompt("Quantos anos você tem?")
//let idadeamigo = prompt("Quantos anos seu amigo tem?")

//let idade1 = Number(idade)
//let idadeamigo1 = Number(idadeamigo)

//console.log("Sua idade é maior que a do seu amigo: " + idade > idadeamigo )
//console.log(idade1 - idadeamigo1) // Diferença de idade
//alert (idade - idadeamigo) 

//3. FAÇA UM PROGRAMA QUE IMPRIMA IDADE EM ANOS 

//let idade = prompt("Quantos anos você tem?")

//console.log (idade + "anos")
//console.log (idade * 12 + "meses de idade")
//console.log (idade * 360 + "dias de idade")
//console.log (idade * 8760 + "horas de idade")

// 4. Faça um programa que pergunte ao usuário dois números.
//Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo true ou false:

let escolha1 = prompt("Digite um número")
let escolha2 = prompt("Digite outro número")

console.log (escolha1 > escolha2) 
console.log (escolha1 === escolha2)
console.log (escolha1 / escolha2 === 0) 
console.log (escolha2 / escolha1 === 0) 
