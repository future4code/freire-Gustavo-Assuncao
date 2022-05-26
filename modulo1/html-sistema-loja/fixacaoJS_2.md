~~~javascript
function calculaPrecoTotal(quantidade) {
    let macaMenosDe1Duzia = 1.30
    let macaDuzia = 1.00
    
    if (quantidade < 12) {
    let calculomacaMenosDe1Duzia = macaMenosDe1Duzia * quantidade
    console.log(calculomacaMenosDe1Duzia)
    } else if (quantidade >= 12) {
    let calculomacaDuzia = macaDuzia * quantidade
    console.log(calculomacaDuzia)
    }
return calculaPrecoTotal ()

}
~~~
As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia e R$ 1,00 se forem compradas pelo menos 12.

Escreva uma função receba o número de maçãs compradas, calcule e retorne o custo total da compra.

