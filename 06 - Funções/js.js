// Função tradicional

function testes() {

    // Executado quando chamar a função.
    console.log('Chamando a função testes')

}

testes() // Chamando a função

console.log('---------------------------')

// Função com parâmetros

function testes2(nome, idade) {
    console.log('O nome passado é: '+nome)
    console.log('A idade é: '+idade)
}

testes2('Marcos', 30) // Chamando a função com os parâmetros 'Marcos' e 30
testes2('Aylla', 3) // Chamando a função com os parâmetros 'Aylla' e 3

console.log('---------------------------')

// Função para retornar algo

function pegarNome() {
    return 'Marcos'
    console.log('testes') // Esta parte não será executada, pois o return encerra a função
}

var nome = pegarNome()
console.log(nome)

console.log('---------------------------')

// Declarando função dentro de uma variável

var func = function() {
    console.log('Olá mundo!')
}
func()

console.log('---------------------------')

// Autoinvocando uma função

(function() {
    console.log('Esta função foi autoinvocada')
})()