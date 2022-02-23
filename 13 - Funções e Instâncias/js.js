// Criando objetos com funções

function Pessoa() {
    this.nome = 'Marcos'
}

var pessoa = new Pessoa()
var pessoa2 = new Pessoa()

// Os objetos criados são acessíveis, podendo ser alterados

pessoa.nome = 'João'
console.log(pessoa.nome)

// Podemos observar que pessoa2 não altera seu valor, pois ele é um outro objeto

console.log(pessoa2.nome)
