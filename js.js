const diginome = document.querySelector('.diginome');
const estagio = document.querySelector('.estagio');
const espaco = document.querySelector('.espaco')
const digi = document.querySelector('.digimon');
const form = document.querySelector('.btn')
const input = document.querySelector('.btn-search')
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')

    let searchDigimon = 1;

const fetchDigimon = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    if (APIResponse.status == 200) {
        const data = await APIResponse.json();
        return data;
    }
    
}

const renderDigimon = async (pokemon) => {

    diginome.innerHTML = 'Carregando...';
    estagio.innerHTML = '';
    const data = await fetchDigimon(pokemon);

    if (data) {

        digi.style.display = 'block';
        diginome.innerHTML = data.name;
        espaco.innerHTML = ("-");
        estagio.innerHTML = data.id;
        digi.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];

    input.value = '';
    searchDigimon = data.id;
    }else{
        digi.style.display = 'none';
        diginome.innerHTML = 'Não encontrado.';
        estagio.innerHTML = '';
        digi.innerHTML = '';
    }

    
}

form,addEventListener('submit', (event) => {

    event.preventDefault();

    renderDigimon(input.value.toLowerCase());
    
});

prev.addEventListener('click', () => {
    if (searchDigimon > 1){
        searchDigimon -= 1;
    renderDigimon(searchDigimon);
    }
})

next.addEventListener('click', () => {
    searchDigimon += 1;
    renderDigimon(searchDigimon);
})

renderDigimon(searchDigimon);



