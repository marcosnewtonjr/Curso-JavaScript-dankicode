var els = document.querySelectorAll('.playerOptions div > img')
var playOpt = ''

function resetOpacityPlayer() {
    for (var i = 0; i < els.length; i++) {
        els[i].style.opacity = 0.3
    }
}

for (var i = 0; i < els.length; i++) {
    els[i].addEventListener('click', function(t){
        resetOpacityPlayer()
        t.target.style.opacity = 1
        playOpt = t.target.getAttribute('opt')
        alert(playOpt)
    })
}