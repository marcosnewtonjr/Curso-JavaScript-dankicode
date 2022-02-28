var els = document.querySelectorAll('.playerOptions div > img')
var enemyOptions = document.querySelectorAll('.enemyOptions div > img')
var playOpt = ''
var enemyOpt = ''

function resetOpacityPlayer() {
    for (var i = 0; i < els.length; i++) {
        els[i].style.opacity = 0.3
    }
}

function resetOpacityEnemy() {
    for (var i = 0; i < enemyOptions.length; i++) {
        enemyOptions[i].style.opacity = 0.3
    }
}

function validarVitoria() {

    var resultado = document.querySelector('.vencedor')

    if (playOpt == 'papel') {
        if(enemyOpt == 'papel') {
            // Empate
            resultado.innerHTML = 'O jogo empatou!'
        } else if (enemyOpt == 'pedra') {
            // Vitoria
            resultado.innerHTML = 'O Player ganhou!'
        } else if (enemyOpt == 'tesoura') {
            // Derrota
            resultado.innerHTML = 'O Player perdeu!'
        }
    }

    if (playOpt == 'pedra') {
        if(enemyOpt == 'papel') {
            // Derrota
            resultado.innerHTML = 'O Player perdeu!'
        } else if (enemyOpt == 'pedra') {
            // Empate
            resultado.innerHTML = 'O jogo empatou!'
        } else if (enemyOpt == 'tesoura') {
            // Vitoria
            resultado.innerHTML = 'O Player ganhou!'
        }
    }

    if (playOpt == 'tesoura') {
        if(enemyOpt == 'papel') {
            // Vitoria
            resultado.innerHTML = 'O Player ganhou!'
        } else if (enemyOpt == 'pedra') {
            // Derrota
            resultado.innerHTML = 'O Player perdeu!'
        } else if (enemyOpt == 'tesoura') {
            // Empate
            resultado.innerHTML = 'O jogo empatou!'
        }
    }
}

function inimigoJogar() {
    var rand = Math.floor(Math.random()*3)
    resetOpacityEnemy()
    enemyOptions[rand].style.opacity = 1
    enemyOpt = enemyOptions[rand].getAttribute('opt')
    
    // alert(enemyOpt)

    validarVitoria()
    
}

for (var i = 0; i < els.length; i++) {
    els[i].addEventListener('click', function(t){
        resetOpacityPlayer()
        t.target.style.opacity = 1
        playOpt = t.target.getAttribute('opt')
        
        // alert(playOpt)

        inimigoJogar()
    })
}