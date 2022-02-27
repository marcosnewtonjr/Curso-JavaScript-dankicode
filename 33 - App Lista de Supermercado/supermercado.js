var itens = []

document.querySelector('input[type=submit]').addEventListener('click', () => {
    var nomeProduto = document.querySelector('input[name=nomeProduto]').value
    var valorProduto = document.querySelector('input[name=valorProduto]').value

    itens.push({
        nome: nomeProduto,
        valor: valorProduto
    })
    alert(itens[0].nome)
})