fetch(' https://pokeapi.co/api/v2/pokemon?limit=10')
    .then(response => response.json())
    .then(allpokemon => {

        var pokemons = []

        allpokemon.results.map((val) => {

            fetch(val.url)
                .then(response => response.json())
                .then(pokemonSingle => {
                    
                pokemons.push({nome:val.name,imagem:pokemonSingle.sprites.front_default})

                if(pokemons.length == 10) {
                    console.log(pokemons)
                }

                /*
                <div class="pokemon-box">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" alt="Imagem Pokemon">
                <p>Dito</p>
                </div>
             */

                })

        })
        
    })