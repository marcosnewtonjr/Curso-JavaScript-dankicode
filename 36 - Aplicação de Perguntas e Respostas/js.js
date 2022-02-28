var elementos = document.querySelectorAll('.resposta')
//alert(elementos.length)
for(var i = 0; i < elementos.length; i++) {
    elementos[i].addEventListener('change', (e) => {
        //alert('Alguma alteração')
        let marcado = e.target.value
        if( marcado == 'correta') {
            //alert('Você acertou!')
            //let el = e.target.previousElementSibling.style.backgroundColor = 'green' // Aqui se recupera o elemento anterior para aplicar alguma alteração
            let parentNode = e.target.parentNode            
            parentNode.style.backgroundColor = 'green'

            let els = parentNode.parentNode.querySelectorAll('.resposta')

            for(var n = 0; n < els.length; n++) {
                els[n].disabled = true // Desabilita o bloco, não permite a edição mas continua visivel
            }

        } else if (marcado == 'incorreta'){
            //alert('Você errou!')
            //let el = e.target.previousElementSibling.style.backgroundColor = 'red' // Aqui se recupera o elemento anterior para aplicar alguma alteração
            let parentNode = e.target.parentNode            
            parentNode.style.backgroundColor = 'red'

            let els = parentNode.parentNode.querySelectorAll('.resposta')

            for(var n = 0; n < els.length; n++) {
                els[n].disabled = true // Desabilita o bloco, não permite a edição mas continua visivel
            }

            let correta = parentNode.parentNode.querySelector('[value=correta')
            correta.parentNode.style.backgroundColor = 'green'
        }
    })
}