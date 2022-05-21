// REVISÃO
// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]
  
// const imprimirMensagem = (usuario) => {
//     console.log(usuario)
//     return usuario.nome
// }

// const novoArrayA = usuarios.map(imprimirMensagem)

// console.log("resulado:" ,novoArrayA)    

// Essa estrutura - cria um novo array, aproveitando o existente 
// e botando só os nomes 

// - TESTANDO PARA ENTENDER MELHOR
// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]

// const imprimirMensagem = (usuario, indice,array) => {
//     console.log("primeiro parâmetro:", usuario, "indice atual:", indice)
//     return usuario.nome
// }
// ------------------------------------------------------------------------------------
                                // INTERPRETAÇÃO DE CÓDIGO

// 1. 

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]
  
//   const novoArrayA = usuarios.map((item, index, array) => {
//      console.log(item, index)
//   })

//   a) O que vai ser impresso no console?
// imprime 3 novos arrays levando os valores da variável original (usuarios)

// 2. 
// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayB = usuarios.map((item, index, array) => {
//      return item.nome
//   })
  
//   console.log(novoArrayB)

3. 
// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayC = usuarios.filter((item, index, array) => {
//      return item.apelido !== "Chijo"
//   })
  
//   console.log(novoArrayC)
// ----------------------------------------------------------
// 1. 
// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" }, 
//     { nome: "Laís Petra", apelido: "Laura" }, 
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//  
  
//   const novoArrayA = usuarios.map((item, index, array) => {
//      console.log(item, index, array)
//   })

// //   a) O que vai ser impresso no console?
// // Ele vai imprimir o array 3 vezes com todas as informações e os indices. 

// 2. 
// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" }, 
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayB = usuarios.map((item, index, array) => {
//      return item.nome
//   })
  
//   console.log(novoArrayB)

//   a) O que vai ser impresso no console?
// ele imprime os nomes e mostra os indices

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayC = usuarios.filter((item, index, array) => {
//      return item.apelido !== "Chijo"
//   })
  
//   console.log(novoArrayC)
  
//   a) O que vai ser impresso no console?

// //   nome e apelido da Lais e Amanda. 
// -------------------------------------------------------
                // ESCRITA DE CÓDIGO   

// a) Crie um novo array que contenha apenas o nome dos doguinhos
//                 const pets = [
//    { nome: "Lupin", raca: "Salsicha"},
//    { nome: "Polly", raca: "Lhasa Apso"},
//    { nome: "Madame", raca: "Poodle"},
//    { nome: "Quentinho", raca: "Salsicha"},
//    { nome: "Fluffy", raca: "Poodle"},
//    { nome: "Caramelo", raca: "Vira-lata"},
// ]

// const nomeDosPets = pets.map((dogs) => {
//     return dogs.nome
// })
// console.log(nomeDosPets)     

// b) Crie um novo array apenas com os cachorros salsicha
// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]
 
//  const nomeDosPet = pets.filter((dogs) => {
//      return dogs.raca === "Salsicha"
//  })
//  console.log(nomeDosPet)     

// c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. 
// A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"
 
// const pets = [
//    { nome: "Lupin", raca: "Salsicha"},
//    { nome: "Polly", raca: "Lhasa Apso"},
//    { nome: "Madame", raca: "Poodle"},
//    { nome: "Quentinho", raca: "Salsicha"},
//    { nome: "Fluffy", raca: "Poodle"},
//    { nome: "Caramelo", raca: "Vira-lata"},
// ]

// const enviarMensagem = pets.filter((dog) => {
//     return dog.raca === "Poodle"
// })
// console.log(enviarMensagem) 
// console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a seu ${EnviarMensagem} `)
// const soPoodle = pets.filter((dog) => {
//     return dog.raca === "Poodle"
// })
// console.log(soPoodle) 

// 2. 
// A)
// const nomeItens = produtos.map((item) => {
//     return item.nome
// })
// console.log(nomeItens);

// // B)
// const precoDesconto = produtos.map((item)) => {
//     return item.nome + (item.preco*0.95)
// })
// console.log(precoDesconto);

//NÃO CONSEGUI O RESTANTE 

