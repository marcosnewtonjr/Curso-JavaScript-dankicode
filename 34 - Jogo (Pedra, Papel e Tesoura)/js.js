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

function inimigoJogar() {
    var rand = Math.floor(Math.random()*3)
    resetOpacityEnemy()
    enemyOptions[rand].style.opacity = 1
    enemyOpt = enemyOptions[rand].getAttribute('opt')
    alert(enemyOpt)
    
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