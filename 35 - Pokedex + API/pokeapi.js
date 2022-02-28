function pegaPokemons(quantidade) {
    fetch(' https://pokeapi.co/api/v2/pokemon?limit='+quantidade)
    .then(response => response.json())
    .then(allpokemon => {

        var pokemons = []

        allpokemon.results.map((val) => {

            fetch(val.url)
                .then(response => response.json())
                .then(pokemonSingle => {
                    
                    pokemons.push({nome:val.name,imagem:pokemonSingle.sprites.front_default})

                    if(pokemons.length == quantidade) {

                        var pokemonBoxes = document.querySelector('.pokemon-boxes')
                        pokemonBoxes.innerHTML = ''
                        
                        pokemons.map(function(val) {
                            
                            pokemonBoxes.innerHTML += `
                            
                            <div class="pokemon-box">
                            <img src="${val.imagem}" alt="Imagem Pokemon">
                            <p>${val.nome}</p>
                            </div>

                            `

                        })

                    }             

                })

        })
        
    })
}



var quantidade = document.getElementById('quantidade')
quantidade.addEventListener('change',() => {
    pegaPokemons(quantidade.value)
})