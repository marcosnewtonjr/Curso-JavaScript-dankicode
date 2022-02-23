// Na declaração de objetos, utilizamos as chaves

var objetos = {
    'nome':'Marcos Newton',
    'idade':'30',
    'profissao':'empreendedor'
}

console.log(objetos)

console.log('---------------------------')

// Para acessar uma posição dentro de um objeto devemos vincular o nome do objeto ao seu index personalizado

console.log(objetos.nome)
console.log(objetos.idade)
console.log(objetos.profissao)

console.log('---------------------------')

// Podemos criar objetos dentro de arrays

var pessoas = [{
    'nome':'Camila',
    'idade':'32',
    'profissao':'professora'
},
{
    'nome':'Aylla Victória',
    'idade':'2',
    'profissao':'princesa do papai'
},
{
    'nome':'Maria Alice',
    'idade':'0',
    'profissao':'bebê do papai'
}]

console.log(pessoas[0])
console.log(pessoas[1])
console.log(pessoas[2])

console.log('---------------------------')

// Além disto podemos acessar uma posição dentro do objeto na array

console.log(pessoas[0].nome)
console.log(pessoas[1].nome)
console.log(pessoas[2].nome)