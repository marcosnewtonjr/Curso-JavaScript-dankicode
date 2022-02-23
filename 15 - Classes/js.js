// Maneira correta de trabalhar com orientação a objetos

class Animal{    
    constructor(pet){
        this.nome = pet
    }
    printNome(){
        return this.nome
    }
}

var animal = new Animal('Bolota')

console.log(animal.nome)
console.log(animal.printNome())

// Podemos criar classes que herdem o constructor de outra classe

class Cachorro extends Animal{
    constructor(nome){
        super(nome)
        this.raca = 'Pincher'
    }
}

var cachorro = new Cachorro('Candoca')

console.log(cachorro)