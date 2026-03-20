import { fetchPokemon, btnUpShowText, btnDownShowText } from "./library.js"
//
const pokedexContainer = document.querySelector("#pokedexContainer")
const buttonright = document.querySelector("#buttonRight")
const buttonLeft = document.querySelector("#buttonLeft")
const buttonTop = document.querySelector("#ButtonTop")
const buttonBottom = document.querySelector("#ButtonBottom")
const pokemonfoto = document.querySelector("#pokedexPhoto")
const pokemonnaam = document.querySelector("#pokedexPokemonNaam")
const statsContainerUp = document.querySelector("#statsContainerUp")
const statsContainerDown = document.querySelector("#statsContainerDown")
const searchPokemon = document.querySelector("#searchInput")
const pokedexImg = document.querySelector("#pokedexImg")
const fullPokedexScreen = document.querySelector("#Pokedex")

// starts everything at this pokemon
let index = 384

// this makes it so theres always 1 pokemon on screen
fetchPokemon(index)
btnUpShowText(index)


    // if right button is clicked nex pokemon in line goes
buttonright.addEventListener("click", function() {

    if (index < 1025) {
        index ++
    }

    fetchPokemon(index)
    pokemonnaam.style.display="block"
    pokemonfoto.style.display="block"
    statsContainerUp.style.display="none"
    statsContainerDown.style.display="none"

})


// if left button is clicked previous pokemon in line goes
buttonLeft.addEventListener("click", function() {

    if (index > 1) {
        index --
    }

    fetchPokemon(index)
// dit zorgt ervoor dat de foto terug komt als er up de up button zou geduwd zijn
    pokemonnaam.style.display="block"
    pokemonfoto.style.display="block"
    statsContainerUp.style.display="none"
    statsContainerDown.style.display="none"


})


/* THIS IS SO THAT THE STATS MATCH THE POKEMON */

buttonTop.addEventListener("click", function() {

    btnUpShowText(index)
        pokemonfoto.style.display="none"
        pokemonnaam.style.display="block"
        statsContainerUp.style.display="block"
        statsContainerDown.style.display="none"
})

buttonBottom.addEventListener("click", function(){
    btnDownShowText(index)

    pokemonfoto.style.display="none"
    pokemonnaam.style.display="block"
    statsContainerUp.style.display="none"
    statsContainerDown.style.display="block"
})

searchPokemon.addEventListener("keydown", function(event){
    if (event.key === "Enter") {
        let value = searchPokemon.value.trim();

        if(!isNaN(value) && value!= "") {
            index = Number(value)
            fetchPokemon(index)
        } else {
            fetch(`https://pokeapi.co/api/v2/pokemon/${value}/`)
            .then(Response => Response.json())
            .then(data => {
                index = data.id;
                fetchPokemon(index);
            })
        }
        searchPokemon.value = "";
        statsContainerUp.style.display="none"
        statsContainerDown.style.display="none"
    }
})  

// if you click on the photo you can catch the pokemon
pokedexImg.addEventListener("click", function(){
    fullPokedexScreen.style.display = "none"
})