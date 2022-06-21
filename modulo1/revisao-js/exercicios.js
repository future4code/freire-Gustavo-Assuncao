// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {

    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {

    return array.reverse(length)
}
// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort((a,b) => a-b)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    const arrayPares = array.filter((array) => {
        return array % 2 === 0
        })
    return arrayPares
    }

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let arrayPares = retornaNumerosPares(array)
    for(let i = 0; i <arrayPares.length; i++) {
        arrayPares [i] = arrayPares[i] * arrayPares[i]
}
    return arrayPares
}
// EXERCÍCIO 06

function retornaMaiorNumero(array) {

    let maximo =  Math.max(...array)
    return maximo
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

    // let numeros = (num1, num2)

    // let maximo = Math.max(...numeros)
    // let minimo = Math.min(...numeros)
    // let diferenca = maximo - minimo 

    // return (`
    //         ${maximo}
    //         ${minimo}
    //         ${diferenca}
    // `) NÃO FUNCIONOU 

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    // const nPares = n.filter((n) => {
    //     return n % 2 === 0
    //     })
    // return nPares
// NÃO FUNCIONOU

}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
// NÃO CONSEGUI
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
// NÃO CONSEGUI
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
// let infosDoFilme = filme.map(()) => {
// }
//  return (`Venha assistir ao filme ${nome.infoDoFilme} de ${ano.infoDoFilme}, dirigido por ${diretor.infoDoFilme} e 
//  estrelado por ${atores.infoDoFilme}`)

// }

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {

}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {

}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

}