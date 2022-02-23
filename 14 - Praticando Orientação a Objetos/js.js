// Criando funções dentro de um objeto

function Pessoa(){
    this.nome = 'Marcos'
    this.idade = 30
    this.printNome = function(parâmetro) {
        console.log(parâmetro)
    }
}

var pessoa = new Pessoa()
var pessoa_2 = new Pessoa()

pessoa_2.nome = 'João'

// Interação de objetos

pessoa.printNome(pessoa_2.nome)

// Configurando parâmetros

function Animal(nome,peso,raça) {
    this.nome = nome
    this.peso = peso
    this.raça = raça
}

var animal = new Animal('Bolota','6kg','Shitzu')

console.log(animal)