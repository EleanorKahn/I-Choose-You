
const fetchPokemon = () => {
    const random = Math.floor(Math.random(150) + 1) * 100;
    const repsonse = fetch(`https://pokeapi.co/api/v2/ability/${random}/`)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }
            const data = response.json();
            console.log(data);
            return data;
        })
        .catch((error) => console.log("Couldn't fetch data"));
}

fetchPokemon();