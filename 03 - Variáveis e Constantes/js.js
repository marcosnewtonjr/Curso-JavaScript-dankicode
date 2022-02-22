// var = variável global
// let = variável no escopo
// const = constante

var nome = "Marcos Newton"

nome = "Aylla Victória"

{
    let idade = 3
    console.log(idade)
    console.log(nome) // var nome é uma variável global, por isto funciona em todo o código
}

console.log(nome)
// console.log(idade) = ERRO pois a variável idade faz parte do escopo dentro das chaves

const pet = "Bolota"

// pet = "Tartaruga" = ERRO pois uma constante não pode ser redefinida

console.log(pet)