~~~javascript
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
    let comissao = (100*qtdeCarrosVendidos + 0.05*valorTotalVendas)
    let salarioFinal = 2000+comissao
    return salarioFinal
}
~~~
