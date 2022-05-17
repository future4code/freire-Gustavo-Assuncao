//INTERPRETAÇÃO DE CÓDIGOS
// 1.
// const filme = {
// 	nome: "Auto da Compadecida", 
// 	ano: 2000, 
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// 		"Virginia Cavendish"
// 		], 
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"}, 
// 		{canal: "Canal Brasil", horario: "19h"}, 
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[0])
// console.log(filme.elenco[filme.elenco.length - 1])
// console.log(filme.transmissoesHoje[2])


// vai ser impresso: 
// Matheus Nachtergaele
// Virginia Cavendish
// Denise Fraga 

// 2.
// const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// console.log(cachorro)
// console.log(gato)
// console.log(tartaruga)

// a) O que vai ser impresso no console?
// nome:Juca, idade 3, raca SRD
// nome: Juba, idade 3, raca SRD
// nome: Jubo, idade 3, raca SRD
// b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
// faz uma cópia de um objeto para dentro do outro inteiro 

// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
// nome: "Caio", 
// idade: 23, 
// backender: false
// }

// console.log(minhaFuncao(pessoa, "backender"))
// console.log(minhaFuncao(pessoa, "altura"))

// // a) O que vai ser impresso no console?
// FALSE 
// undefined


// // b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
// Não tem altura definida 
// caio do objeto pessoa é falsa backender

// EXERCICIOS DE ESCRITA DE CÓDIGO

// a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente três apelidos). Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo:

// 1. 
const pessoa = {
    nome: "Gustavo", 
    apelidos: ["Gus", "Guga", "Gu"]
}

console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos}`)

// Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de três apelidos. Depois, chame a função feita no item anterior passando como argumento o novo objeto

const novaPessoa = {
    ...pessoa, 
    apelidos: ["Tavinho", "Gusta", "Guguinha"]
}

// console.log(`o nome da pessoa é ${novapessoa.nome}, e os apelidos são: ${novapessoa.apelidos}`)
console.log(novaPessoa)
// // 2. nome, idade e profissão 
// // a)


const pessoa1 = {
    nome: "Paulo",
    idade: 25,
    profissao: "porteiro" 

}

const pessoa2 = {
    nome: "Phellipe", 
    idade: 35,
    profissao: "Designer" 

}
let minhafuncao = pessoa1
console.log(minhafuncao.nome)
console.log(minhafuncao.nome.length)
console.log(minhafuncao.idade)
console.log(minhafuncao.profissao)
console.log(minhafuncao.profissao.length)

let minhafuncao2 = pessoa2
console.log(minhafuncao2.nome)
console.log(minhafuncao2.nome.length)
console.log(minhafuncao2.idade)
console.log(minhafuncao2.profissao)
console.log(minhafuncao2.profissao.length)

// NÃO CONSEGUI, AMANHÃ VER COMO COLOCO ARRAYS AQUI

// 3. 
// a)
let carrinho = []

// b)

const sacolao = [
{nome: "acerola", disponibilidade: true},
{nome: "morango", disponibilidade: true},
{nome: "banana", disponibilidade: true}
]

carrinho.push(sacolao)
console.log(carrinho)

//Desafios 1 - 
