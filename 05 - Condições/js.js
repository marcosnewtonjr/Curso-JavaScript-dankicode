var numero = 10
var nome = 'Marcos'

// == igual
// < menor que
// > maior que
// <= menor igual a
// >= maior igual s
// != diferente de

if (numero >= 50) {

    console.log('Verdadeiro')

} else if (nome == 'marcos') { // O JavaScript é uma linguagem case sensitive, ou seja, Marcos é diferente de marcos

    console.log('Entramos no else if! Verdadeiro')

} else {

    console.log('Entrou no else')

}

// Outros comparadores mais avançados são:
// && "e" onde todas as condições têm que ser verdadeiras
// || "ou" onde apenas uma condição deve ser verdadeira

if (numero > 5 && nome == 'Marcos') {

    console.log('Todas as condições foram atendidas')

} else {

    console.log('Uma ou nenhuma das condições não foram atendidas')
}

if (numero < 5 || nome != 'Marcos') {

    console.log('Pelo menos uma das condições foram atendidas')

} else {

    console.log('Nenhuma condição foi atendida')

}