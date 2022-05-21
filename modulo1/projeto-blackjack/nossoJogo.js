// - O jogo inicia com cada jogador (usuário e computador) recebendo 2 cartas. A pontuação de cada jogador é a soma do valor das suas cartas.
// - O jogador com a maior pontuação ganha a rodada.
// - usar os valores de comprarCarta 
//colocar 3 condiçoes: ganhar, perder e empate


//SUBSTITUÍ O console.log() PELO alert(), PARA DEIXAR O 21 MAIS INTUITIVO, TUDO BEM? 


let boasvindas = alert("♥️♦️♣️Seja bem-vindo(a) ao jogo de Blackjack!♥️♦️♣️")
   if(confirm("♦️Quer iniciar uma nova rodada?♦️") === true) {
	   alert("♦️Se prepara!...Jogando as cartas!...♦️")
   } else {'1'
	   alert("♦️Ahh, que pena, o jogo acabou!♦️")}


const carta = comprarCarta()
const usuario = comprarCarta()
const computador = comprarCarta()


if (carta.usario !== carta.computador && carta.usario > carta.computador) {
   alert(`
   ♣️Parabéns! O usuário ganhou!♣️ 
   Usuário - cartas: ${carta.texto} - pontuação: ${carta.valor}
   Computador - cartas: ${carta.texto} - pontuação: ${carta.valor}`)
} else if (carta.usario !== carta.computador && carta.usuario < carta.computador) {
   alert(`
   ♣️Ah que pena, O computador ganhou!♣️ 
   Usuário - cartas: ${carta.texto} - pontuação: ${carta.valor}
   Computador - cartas: ${carta.texto} - pontuação: ${carta.valor}`)
} else if (carta.usuario === carta.computador) {
   alert(`
   ♣️Empate! Quase você chega lá, tente novamente!♣️
   Usuário - cartas: ${carta.texto} - pontuação: ${carta.valor}
   Computador - cartas: ${carta.texto} - pontuação: ${carta.valor}`)
} 

alert("♦️Quer ir outra partida?♦️ \n♣️ É Só dar F5 na página!♣️")
