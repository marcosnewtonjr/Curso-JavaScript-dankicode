var itens = []

document.querySelector('input[type=submit]').addEventListener('click', () => {
    var nomeProduto = document.querySelector('#nomeProduto').value
    var valorProduto = document.querySelector('#valorProduto').value

    itens.push({
        nome: nomeProduto,
        valor: valorProduto
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
    document.getElementById('nomeProduto').value = ''
    document.getElementById('nomeProduto').focus()
    document.getElementById('valorProduto').value = ''

    console.log(itens)
})