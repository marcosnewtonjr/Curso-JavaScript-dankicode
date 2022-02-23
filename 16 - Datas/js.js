// Podemos pegar as datas atuais do sistema

var date = new Date()

console.log(date.getDate()) // Dia do mês
console.log(date.getDay()) // Posição do dia da semana - Domingo [0] ... Sabadp [6]
console.log(date.getFullYear()) // Ano
console.log(date.getHours()) // Hora

// Também podemos definir uma data manualmente

var manualDate = new Date('04/25/1991')

console.log(date)
console.log(manualDate)

var dif = date.getTime() - manualDate.getTime() // Calculando a diferença em ms, não há necessidade de utilizar o get.Time()

console.log(dif)

var difDias = dif / (1000 * 3600 * 24) // transformando a diferença em dias

console.log(difDias)

var difAnos = difDias / 365 // Calculando a diferença em anos

console.log(difAnos)