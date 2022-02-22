// Leitura manual de uma array

var arr = ['Camila', 'Marcos', 'Aylla', 'Maria Alice']

for (var i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

console.log('---------------------------')

// Leitura automatizada de uma array

var arr2 = ['Candoca', 'Mel', 'Bolota', 'Princesa']

arr2.forEach(function(value, index) {
    console.log(value)
})