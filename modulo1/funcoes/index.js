/* function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))

a) O que vai ser impresso no console?
10
50

b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` 
e `minhaFuncao(10)`? O que apareceria no console?
não seria impresso, pois eu preciso chamar a função para poder funcionar  */

/* 2. Leia o código abaixo
                                Gostando de aprender js 
let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

    a. Explique o que essa função faz e qual é sua utilidade
    Declarei função, e depois ele vai concatenar a minha função com a inclusao de cenoura 

    b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
        i.   `Eu gosto de cenoura`
        ii.  `CENOURA é bom pra vista`
        iii. `Cenouras crescem na terra` */

        //Exercícios de escrita de código
        
        //1. Escreva as funções explicadas abaixo:
    
        //a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como:

// function sobremim(){
//         const nome = "Caio"
//         const idade = "23"
//         const cidade = "São Paulo"
//         const ocupacao = "estudante"

//             console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${ocupacao}`);
//         }
//         const infos = sobremim()

        // -------------------------------------------
/*         b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: 
        o nome (`string`), a idade (`number`), a cidade (`string`) 
        e uma profissão (`string`). Ela deve retornar 
        uma `string` que unifique todas as informações da pessoa em uma só mensagem com o template: */

        // function sobremim(nome,idade,cidade,ocupacao){
        //     nome = "Gustavo"
        //     idade = 25
        //     cidade = "Maceio"
        //     ocupacao = "estudante"
    
        //         return `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${ocupacao}`
        //     }

        //     const infos = sobremim()
        //     console.log ("infos", infos)


            // 2. a)

            // function somardoisnumeros (num1, num2){
            //     const soma = num1+num2
            //     return soma
            // }
            // console.log(somardoisnumeros(1,2))
            
            // b) Faça uma função que recebe 2 números e retorne um booleano que 
            //informa se o primeiro número é maior ou igual ao segundo.

/* function recebe(num1, num2) {
    return num1 >= num2 
}

let numero = recebe(3, 2)
console.log(numero)
pode ser assim ou assim 
//console.log(recebe(3,2))
 */
// c) ok
// function npar(num1){
//     return num1 % 2 == 0
// }
// console.log('É par?:' + npar(4))

// d)  Faça uma função que recebe uma mensagem (string) como parâmetro e
// imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.

// function recebemsgm (sms) {
//     let sms1 = sms.toUpperCase()
//     let sms2 = sms.length
    

//     return sms1 + " " + sms2
// }
// console.log(recebemsgm("Estou gostando de codar"))

// 4. Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). 
// Em seguida, peça para o usuário inserir dois números e 
// chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. 
// Por fim, mostre no console o resultado das operações:
// OK
// function operacoes() {
//         let soma = 30 + 3
//         let subtracao = 30 -3
//         let multiplicacao = 30 * 3
//         let divisao = 30 / 3
    
//         return  `O reultado é 
//         da soma = ${soma},
//         da substração = ${subtracao}, 
//         da multiplicação =${multiplicacao}, 
//         da divisão = ${divisao}`
// }
// console.log(operacoes())

// Números inseridos: 30 e 3
// Soma: 33
// Diferença: 27
// Multiplicação: 90
// Divisão: 10

