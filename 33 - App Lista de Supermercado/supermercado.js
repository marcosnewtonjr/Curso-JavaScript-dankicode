var itens = []

document.querySelector('input[type=submit]').addEventListener('click', () => {
    var nomeProduto = document.querySelector('#nomeProduto').value
    var valorProduto = document.querySelector('#valorProduto').value

    itens.push({
        nome: nomeProduto,
        valor: Number(valorProduto)
    })

    /*
    <div class="lista-produtos-single">
        <h3>RedBull</h3>
        <p class="price-produto"><span>R$20,00</span></p>      
    </div>
    */

    var listaProdutos = document.querySelector('.lista-produtos')
    
    listaProdutos.innerHTML += `
    <div class="lista-produtos-single">
        <h3>${nomeProduto}</h3>
        <p class="price-produto"><span>${valorProduto}</span></p>      
    </div>
    `
    var soma = 0
    itens.map(function(val) {
        soma += val.valor
    })

    var somaProdutos = document.querySelector('.soma-produto h2')

    somaProdutos.innerHTML = `Total: R$ ${soma}`

    document.getElementById('nomeProduto').value = ''
    document.getElementById('nomeProduto').focus()
    document.getElementById('valorProduto').value = ''

    console.log(itens)
})

document.querySelector('.limpar').addEventListener('click', () => {
    itens = []
    document.querySelector('.lista-produtos').innerHTML = ''
    document.querySelector('.soma-produto h2').innerHTML = 'Total: R$0'
})