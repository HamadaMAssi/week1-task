const countries = [
    {
        id: 1,
        name: "Brazil",
        population: 212559417,
        region: "South America",
        capital: "Brasília",
        image: "./assets/br.svg",
        nativeName: "Brazil",
        subRegion: "South America",
        topLevelDomain: ".be",
        currencies: "Euro",
        languages: "French, Dutch"
    },
    {
        id: 2,
        name: "United States",
        population: 331002651,
        region: "North America",
        capital: "Washington",
        image: "./assets/us.svg",
        nativeName: "",
        subRegion: "",
        topLevelDomain: "",
        currencies: "",
        languages: ""
    },
    {
        id: 3,
        name: "Algeria",
        population: 43851044,
        region: "Africa",
        capital: "Algiers",
        image: "./assets/dz.svg",
        nativeName: "",
        subRegion: "",
        topLevelDomain: "",
        currencies: "",
        languages: ""
    },
    {
        id: 4,
        name: "Afghanistan",
        population: 38928346,
        region: "Asia",
        capital: "Kabul",
        image: "./assets/af.svg",
        nativeName: "",
        subRegion: "",
        topLevelDomain: "",
        currencies: "",
        languages: ""
    },
    {
        id: 5,
        name: "Albania",
        population: 2877797,
        region: "Europe",
        capital: "Tirana",
        image: "./assets/al.svg",
        nativeName: "",
        subRegion: "",
        topLevelDomain: "",
        currencies: "",
        languages: ""
    },
    {
        id: 6,
        name: "Iceland",
        population: 343599,
        region: "Europe",
        capital: "Reykjavík",
        image: "./assets/is.svg",
        nativeName: "",
        subRegion: "",
        topLevelDomain: "",
        currencies: "",
        languages: ""
    }
];

// generate HTML cards
function generateCards(countries) {
    const container = document.getElementById('countries');
    container.innerHTML = '';

    countries.forEach(country => {
        const cardHTML = `
            <a class="text-decoration-none" href="./detail.html?id=${country.id}" >
                <div class="card border-0 rounded">
                    <img src="${country.image}" class="card-img-top" alt="${country.name} country image" />
                    <div class="card-body py-4 px-4">
                        <h5 class="card-title fw-bold mb-3 text-truncate">${country.name}</h5>
                        <p class="card-text mb-1 text-truncate"><strong>Population: </strong> <span>${country.population}</span></p>
                        <p class="card-text mb-1 text-truncate"><strong>Region: </strong> <span>${country.region}</span></p>
                        <p class="card-text mb-3 text-truncate"><strong>Capital: </strong> <span>${country.capital}</span></p>
                    </div>
                </div>
            </a>
        `;

        container.innerHTML += cardHTML;
    });
}

generateCards(countries);


// Get country by id
function getCountryById() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
}
