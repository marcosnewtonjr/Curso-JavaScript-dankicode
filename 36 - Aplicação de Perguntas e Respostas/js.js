var elementos = document.querySelectorAll('.resposta')
//alert(elementos.length)
for(var i = 0; i < elementos.length; i++) {
    elementos[i].addEventListener('change', (e) => {
        //alert('Alguma alteração')
        let marcado = e.target.value
        if( marcado == 'correta') {
            alert('Você acertou!')
        } else if (marcado == 'incorreta'){
            alert('Você errou!')
        }
    })
}