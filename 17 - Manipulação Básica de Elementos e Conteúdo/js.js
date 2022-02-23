// Selecionando todos os parágrafos

var p = document.getElementsByTagName('p')

// selecionando o primeiro parágrafo apenas. As posições começam do [0]

alert(p[0].innerHTML)

// Manipulando o elemento texto

p[1].innerHTML = 'Manipulado via JS!'