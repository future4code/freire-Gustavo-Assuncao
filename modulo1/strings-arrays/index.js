// Leitura de código
/*
let array
console.log('a. ', array)
//Imprime undefined 
array = null
console.log('b. ', array)
// imprime null
array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)
//imprime 11
let i = 0
console.log('d. ', array[i])
//imprime 3
array[i+1] = 19
console.log('e. ', array)
// imprime 0
const valor = array[i+6]
console.log('f. ', valor)
// imprime 9 (numero)
*/
//                                          DIGITEI: Como você esta?
//                                           FICOU:  COMO VOCÊ ESTI? 15
//const frase = prompt("Digite uma frase")
//console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
//Qual será o valor impresso no console se a entrada do usuário for: "Subi num ônibus em Marrocos"? 
// terá 27 o valor impresso no console

//ESCRITA DE CÓDIGO
/*1. 
let nome = prompt("Qual o seu nome?")
let email = prompt("Qual o seu email?")

alert(`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome}!`)
*/

//2.

//let comidaspreferidas = ["churrasco", "brigadeirão", "strogonoff", "coxinha", "lasanha" ]
//a) Imprima no console o array completo - OK FUNCIONANDO
//console.log(comidaspreferidas)
/*b) Imprima no console a mensagem 
//"Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, uma embaixo da outra. -- OK
console.log("Essas são as minhas comidas preferidas:" )
console.log(comidaspreferidas[0])
console.log(comidaspreferidas[1])
console.log(comidaspreferidas[2])
console.log(comidaspreferidas[3])
console.log(comidaspreferidas[4])
*/
//c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. 
//Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no console a nova lista.

//let pergunta = prompt ("Qual a sua comida preferida?")
//let novascomidaspreferidas = ["churrasco", pergunta , "strogonoff", "coxinha", "lasanha" ]
//console.log(novascomidaspreferidas)

//var arrayAlterarNomes = ["João", "Maria", "Paulo", "Pedro"];
//var itemAlterado = arrayAlterarNomes.splice(2,1, "Joana");
//console.log(arrayAlterarNomes);
//console.log("Item alterado: " + itemAlterado);
//POSSO SUBSTITUIR COM SPLICE TB (MAS REPLACE É MELHOR)

//USAR O REPLACE ALL.

alert("Olá, irei te perguntar 3 tarefas que você irá realizar ao longo do dia")

let listaDeTarefas = []
let task1  = prompt ("Tarefa do dia")
let task2 = prompt ("Tarefa da tarde")
let task3 = prompt ("Tarefa da noite")

listaDeTarefas = [task1, task2,task3]

console.log ("Lista de tarefa", listaDeTarefas)

let realizada = prompt ("Qual tarefa você realizou?: \n-0  \n-1  \n-2")

listaDeTarefas.slice (realizada, 1)
console.log (listaDeTarefas)
