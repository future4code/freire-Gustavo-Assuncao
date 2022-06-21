// Questão 1 
// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
// console.log("Passou no teste.")
// } else {
// console.log("Não passou no teste.")
// }

// a) Explique o que o código faz. Qual o teste que ele realiza? 
// saber se o número é par ou impar 
// b) Para que tipos de números ele imprime no console "Passou no teste"? 
// passou no teste - par 
// c) Para que tipos de números a mensagem é "Não passou no teste"?
// não passou no par - 

// Questão 2 

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
// case "Laranja":
//     preco = 3.5
//     break;
// case "Maçã":
//     preco = 2.25
//     break;
// case "Uva":
//     preco = 0.30
// case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
// default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// a) Para que serve o código acima?

// b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?

// c) Considere que um usuário queira comprar uma `Pêra`, 
// qual seria a mensagem impressa no console se retirássemos o 
// `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?


// 3.

// a) O que a primeira linha está fazendo?
// se o numero for maior que 0 - "Essa mensagem é secreta!!!"
// b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
// dá 
// c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
// sim, pois faltou parentesis - então o escopo não tem como chamar a função. 

// ESCRITA DE CÓDIGO

// // 1. 
// const idade = Number(prompt("Quantos anos você tem?"))

// if (idade >= 18) {
//     console.log("Você pode dirigir")
// } else {
//     console.log("Você não pode dirigir")
// }



// 2. 


// Agora faça um programa que verifica que turno do dia um aluno estuda.
// Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). 
// Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else

// const turno = prompt("Escolha o seu turno: M (matutino) ou V (Vespertino) ou N (Noturno)")

// if (turno === "M") {
//     console.log("Bom dia!")
// } else if (turno === "V") {
//     console.log("Boa tarde!")
// } else if (turno === "N") {
//     console.log("Boa noite!")
// }

// Repita o exercício anterior, mas utilizando a estrutura de switch case agora.

// const turno = prompt("Escolha o seu turno: M (matutino) ou V (Vespertino) ou N (Noturno)")
//     switch (turno){
//         case "N":
//             console.log("Bom dia!")
//             break;
//             case "V":
//                 console.log("Boa Tarde!")
//                 break;
//                 case "V":
//                 "Boa noite!"
//                 console.log("Boa noite!")
//         default: 
//         console.log("Você digitou um turno inválido")
//             break;
//     }

// 4.
// Considere a situação: você vai ao cinema com um amigo ou amiga, 
// porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia e se o ingresso está abaixo de 15 reais. 
// Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. 
// Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :("

// const filme = prompt("Qual o gênero do filme?")
// const preco = Number(prompt("Qual o preço do ingresso"))

//     if (filme === "fantasia" && preco <= 15){
//         console.log("Bom filme!")
//     } else {
//         console.log("Escolha outro filme")
//     }

// Modifique o código do exercício 4 de escrita de código para, antes de imprimir a mensagem "Bom filme!"
// , pergunte ao usuário, pelo prompt qual lanchinho ele vai 
// comprar (pipoca, chocolate, doces, etc) e imprima no console 
// as mensagens "Bom filme!" e "Aproveite o seu [LANCHINHO]", 
// trocando [LANCHINHO] pelo que o usuário colocou no input.

const filme = prompt("Qual o gênero do filme?")
const preco = Number(prompt("Qual o preço do ingresso"))
const lanchinho = prompt ("Qual lanchinho você vai comprar?")

    if (filme === "fantasia" && preco <= 15){
        console.log(`Bom filme! e aproveite o seu ${lanchinho} `)
    } else {
        console.log("Escolha outro filme")
    }
