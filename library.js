let cachedPokemon = null;

export function fetchPokemon(id) {
    const pokemonfoto = document.querySelector("#pokedexPhoto");
    const pokemonnaam = document.querySelector("#pokedexPokemonNaam");
    const pokemonnummer = document.querySelector("#pokedexPokemonNumber");

    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            // dit verwijdert de oude pokemon zodat je er niet 2 over elkaar hebt
            pokemonfoto.innerHTML = "";
            pokemonnaam.innerHTML = "";
            pokemonnummer.innerHTML = "";

            if (Math.random() > 0.10) {  
                // dit is voor de pokemon foto
                let afbeelding = document.createElement("img");
                afbeelding.src = data.sprites.front_default;
                afbeelding.classList.add("bulb");
                pokemonfoto.appendChild(afbeelding);
            // dit is voor de pokemon naam

                let text = document.createElement("p");
                text.textContent = data.species.name;
                text.classList.add("pokemonNaam");
                pokemonnaam.appendChild(text);
            }
            else {
                let afbeelding = document.createElement("img");
                afbeelding.src = data.sprites.front_shiny;
                afbeelding.classList.add("bulb");
                pokemonfoto.appendChild(afbeelding);
            // dit is voor de pokemon naam

                let text = document.createElement("p");
                text.textContent = `${data.species.name}*`;
                text.classList.add("pokemonNaam");
                pokemonnaam.appendChild(text);
            }
            // dit is voor de pokemon naam
            

            // dit is voor het pokemon nummer
            let nummer = document.createElement("p");
            nummer.textContent = data.id;
            nummer.classList.add("pokedexPokemonNumber");
            pokemonnummer.appendChild(nummer);
        });
}

export function btnUpShowText(id) {
    let baseHealt = document.querySelector("#baseHealt");
    let baseAttack = document.querySelector("#baseAttack");
    let baseDefense = document.querySelector("#baseDefense");

    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(response => response.json())
        .then(data => {
            // dit verwijdert de oude pokemon data zodat je er niet meerdere over elkaar hebt
            baseHealt.innerHTML = "";
            baseAttack.innerHTML = "";
            baseDefense.innerHTML = "";

            let hpText = document.createElement("p");
            let attText = document.createElement("p");
            let defText = document.createElement("p");
            const statsContainerUp = document.querySelector("#statsContainerUp");
            const statsContainerDown = document.querySelector("#statsContainerDown");

            hpText.textContent = `${data.stats[0].stat.name}: ${data.stats[0].base_stat}`;
            attText.textContent = `Att: ${data.stats[1].base_stat}`;
            defText.textContent = `Deff: ${data.stats[2].base_stat}`;

            baseHealt.appendChild(hpText);
            baseAttack.appendChild(attText);
            baseDefense.appendChild(defText);
            
            let color = "grey";

            switch (data.types[0].type.name) {

                case "normal":
                color = "rgb(168, 167, 122)";
                break;

                case "fighting":
                color = "rgb(194, 46, 40)";
                break;

                case "flying":
                color = "rgb(169, 143, 243)";
                break;

                case "poison":
                color = "rgb(163, 62, 161)";
                break;

                case "ground":
                color = "rgb(226, 191, 101)";
                break;

                case "rock":
                color = "rgb(182, 161, 54)";
                break;

                case "bug":
                color = "rgb(166, 185, 26)";
                break;

                case "ghost":
                color = "rgb(115, 87, 151)";
                break;

                case "steel":
                color = "rgb(183, 183, 206)";
                break;

                case "fire":
                color = "rgb(238, 129, 48)";
                break;

                case "water":
                color = "rgb(99, 144, 240)";
                break;

                case "grass":
                color = "rgb(122, 199, 76)";
                break;

                case "electric":
                color = "rgb(247, 208, 44)";
                break;

                case "psychic":
                color = "rgb(249, 85, 135)";
                break;

                case "ice":
                color = "rgb(150, 217, 214)";
                break;

                case "dragon":
                color = "rgb(111, 53, 252)";
                break;

                case "dark":
                color = "rgb(112, 87, 70)";
                break;

                case "fairy":
                color = "rgb(214, 133, 173)";
                break;

                default:
                color = "rgb(128, 128, 128)";
                break;

            }

            statsContainerUp.style.backgroundColor = color;
            statsContainerDown.style.backgroundColor = color;
        });
}

 export function btnDownShowText(id) {
    let specAttac = document.querySelector("#specAttac");
    let specDefence = document.querySelector("#specDefence");
    let baseSpeed = document.querySelector("#baseSpeed");
    const statsContainerUp = document.querySelector("#statsContainerUp");
    const statsContainerDown = document.querySelector("#statsContainerDown");

    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(response => response.json())
        .then(data => {
            // verwijder eerst de oude informatie
            specAttac.innerHTML = "";
            specDefence.innerHTML = "";
            baseSpeed.innerHTML = "";

            let spAtt = document.createElement("p");
            let spDef = document.createElement("p");
            let spd = document.createElement("p");

            spAtt.textContent = `Sp Att: ${data.stats[3].base_stat}`;
            spDef.textContent = `Sp Def: ${data.stats[4].base_stat}`;
            spd.textContent = `${data.stats[5].stat.name}: ${data.stats[5].base_stat}`;

            specAttac.appendChild(spAtt);
            specDefence.appendChild(spDef);
            baseSpeed.appendChild(spd);

            let color = "grey";

           
            
            switch (data.types[0].type.name) {

                case "normal":
                color = "rgb(168, 167, 122)";
                break;

                case "fighting":
                color = "rgb(194, 46, 40)";
                break;

                case "flying":
                color = "rgb(169, 143, 243)";
                break;

                case "poison":
                color = "rgb(163, 62, 161)";
                break;

                case "ground":
                color = "rgb(226, 191, 101)";
                break;

                case "rock":
                color = "rgb(182, 161, 54)";
                break;

                case "bug":
                color = "rgb(166, 185, 26)";
                break;

                case "ghost":
                color = "rgb(115, 87, 151)";
                break;

                case "steel":
                color = "rgb(183, 183, 206)";
                break;

                case "fire":
                color = "rgb(238, 129, 48)";
                break;

                case "water":
                color = "rgb(99, 144, 240)";
                break;

                case "grass":
                color = "rgb(122, 199, 76)";
                break;

                case "electric":
                color = "rgb(247, 208, 44)";
                break;

                case "psychic":
                color = "rgb(249, 85, 135)";
                break;

                case "ice":
                color = "rgb(150, 217, 214)";
                break;

                case "dragon":
                color = "rgb(111, 53, 252)";
                break;

                case "dark":
                color = "rgb(112, 87, 70)";
                break;

                case "fairy":
                color = "rgb(214, 133, 173)";
                break;

                default:
                color = "rgb(128, 128, 128)";
                break;

            }


            statsContainerUp.style.backgroundColor = color;
            statsContainerDown.style.backgroundColor = color;
        });
}
