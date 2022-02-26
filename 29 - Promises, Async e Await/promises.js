function testes() {
    return new Promise(function(resolve,reject){

        setTimeout(function(){

            const erro = false // False para quando não há erro, True para quando há erro

            if(erro) {

                reject('Erro...')

            } else {

                resolve('A promise foi resolvida com sucesso')

            }
        
        },2000)

    })
}

/*
testes().then(function(res) {

    console.log(res)

}) .catch(function(err) {

    console.log(err)

})
*/

async function testes2() {
    await testes().then(function(res) {

            console.log(res)
        
        }) .catch(function(err) {
        
            console.log(err)
        
        })
    console.log('Função sincronizada, sendo executada somente após o término da outra função')
}