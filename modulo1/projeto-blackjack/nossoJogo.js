/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

//     As regras do jogo são as seguintes:

// - Existem 2 jogadores: o usuário e o computador.
// - Os jogadores usam um baralho com muitas cartas. As cartas têm um número (A, 2, 3, 4, 5, 6, 7, 8, 9, 10, J , Q, K)
//  e um naipe (Copas (♥️), Paus (♣️), Ouros(♦️) e Espadas(♠️)).

//  Por exemplo, uma carta do baralho é o dois de Paus (2♣️). Existem 52 possibilidades de cartas diferentes (13 números e 4 naipes).
// - Os jogadores compram cartas do baralho. Ao comprar uma carta do baralho, ela pode ser de qualquer uma das 52 cartas, com probabilidade igual.
// - As cartas tem um valor de acordo com seu número (a carta 4♣️ tem valor 4, e a carta 9♦️ tem valor 9). As cartas J, Q e K tem valor 10,
//  e a carta A tem valor 11.
// - O jogo inicia com cada jogador (usuário e computador) recebendo 2 cartas. A pontuação de cada jogador é a soma do valor das suas cartas.
// - O jogador com a maior pontuação ganha a rodada.

   // let boasvindas = alert("♥️♦️♣️Seja bem-vindo(a) ao jogo de Blackjack!♥️♦️♣️")
   //    if(confirm("Quer iniciar uma nova rodada?") === true) {
	//       alert("Perfeito!Iniciaremos uma nova rodada")
   //    } else {'1'
	//       alert("Ahh, que pena, o jogo acabou!")}


         // Nós preparamos um método que permite sortear uma carta.
         //  Ele já está pronto e você só precisa invocá-lo. Cada carta sorteada é um objeto com duas propriedades:
         //  um texto que representa o que é escrito na carta; e um valor que mostra a pontuação da carta. 

 const carta = comprarCarta(); 
// Sorteia uma carta. Por exemplo, o rei de ouros

console.log(carta.texto) 
// imprime o texto da carta. Nesse caso: "K♦️"

console.log(carta.valor) 
// imprime o valor da carta (um número). Nesse caso: 10)

// 6 - O programa deve mostrar, no console, as cartas e pontuação de cada jogador no formato mostrado abaixo

// if usuario 

// "Usuário - cartas: Q♣️ 10♣️  - pontuação 20" 
// "Computador - cartas: Q♣️ 10♣️  - pontuação 20"


