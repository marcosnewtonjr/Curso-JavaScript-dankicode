// Spread

var nomes = [
    {
        nome: 'João'
    },
    {
        nome: 'Felipe'
    }
]

const objetos = [...nomes,{
    nome: 'Marcos'
}]

console.log(objetos)

// Rest

function testes(...names) {
    console.log(names)
}

testes (1,2,3,4,5,6,['Bolota', 'Candoca'],{nome: 'Marcos', idade: '30'})