
async function fetchData() {
    try{
    const pokemonName = document.getElementById('pokeBar').value.toLowerCase()
       const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
       if(!response.ok){
        throw new Error ('the pokemon doesnt exist');
       }
       const data = await response.json()

       const pokemonSprite = data.sprites.front_default
       const imgElement= document.getElementById('pokemonSprite');
       imgElement.src = pokemonSprite;
       imgElement.style.display = "block"
       
       const name = data.name
       const pokeName = document.getElementById('pokeName')
       pokeName.innerHTML = name;
       pokeName.style.display = "block"

//types of color
       const typeColors = {
        fire: "#F08030",
        water: "#6890F0",
        grass: "#78C850",
        electric: "#F8D030",
        psychic: "#F85888",
        ice: "#98D8D8",
        dragon: "#7038F8",
        dark: "#705848",
        fairy: "#EE99AC",
        normal: "#A8A878",
        fighting: "#C03028",
        flying: "#A890F0",
        poison: "#A040A0",
        ground: "#E0C068",
        rock: "#B8A038",
        bug: "#A8B820",
        ghost: "#705898",
        steel: "#B8B8D0",
    };
    const typeofpkm = data.types[0].type.name 
    const pokeType = document.getElementById ('pokeType')
    pokeType.innerHTML = typeofpkm
    pokeType.style.display = "block"

    // Cambiar el color de fondo según el tipo de Pokémon
   
    const bgColor = typeColors[typeofpkm]  || "#FFFFFF"; 
    document.getElementById('pokeType').style.backgroundColor = bgColor;

       
    if (data.types[1]){
     const typeofpkm2 = data.types[1].type.name
     const pokeType2 = document.getElementById ('pokeType-2') 
     pokeType2.innerHTML = typeofpkm2   
     pokeType2.style.display = "block" 
     const bgColor2= typeColors[typeofpkm2] || "#FFFFFF";
     document.getElementById('pokeType-2').style.backgroundColor = bgColor2;
      
    }else {
     const pokeType2 = document.getElementById('pokeType-2');
     pokeType2.style.display = "none"; 
    }

       
    }
    catch(error){
        console.log(error);
    }
        
    
    //action enter-search
    document.getElementById('pokeBar').addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            fetchData();
        }
    })
}

