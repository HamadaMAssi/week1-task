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
        nativeName: "Brazil",
        subRegion: "South America",
        topLevelDomain: ".be",
        currencies: "Euro",
        languages: "French, Dutch"
    },
    {
        id: 3,
        name: "Algeria",
        population: 43851044,
        region: "Africa",
        capital: "Algiers",
        image: "./assets/dz.svg",
        nativeName: "Brazil",
        subRegion: "South America",
        topLevelDomain: ".be",
        currencies: "Euro",
        languages: "French, Dutch"
    },
    {
        id: 4,
        name: "Afghanistan",
        population: 38928346,
        region: "Asia",
        capital: "Kabul",
        image: "./assets/af.svg",
        nativeName: "Brazil",
        subRegion: "South America",
        topLevelDomain: ".be",
        currencies: "Euro",
        languages: "French, Dutch"
    },
    {
        id: 5,
        name: "Albania",
        population: 2877797,
        region: "Europe",
        capital: "Tirana",
        image: "./assets/al.svg",
        nativeName: "Brazil",
        subRegion: "South America",
        topLevelDomain: ".be",
        currencies: "Euro",
        languages: "French, Dutch"
    },
    {
        id: 6,
        name: "Iceland",
        population: 343599,
        region: "Europe",
        capital: "Reykjavík",
        image: "./assets/is.svg",
        nativeName: "Brazil",
        subRegion: "South America",
        topLevelDomain: ".be",
        currencies: "Euro",
        languages: "French, Dutch"
    }
];


// Get country id
function getId() {
    const params = new URLSearchParams(window.location.search);
    const country = getCountryById(params.get('id'));
    fillCountryData(country);
}
// Get country by id
function getCountryById(id) {
    return countries.find(country => country.id === parseInt(id, 10));
}

getId();

function fillCountryData(country) {
    if (!country) return;
    document.querySelector('.country-flag').src = country.image;
    document.querySelector('.country-flag').alt = `${country.name} flag`;
    document.querySelector('.country-name').textContent = country.name;
    document.querySelector('.country-native-name').textContent = country.nativeName || 'N/A';
    document.querySelector('.country-population').textContent = country.population.toLocaleString();
    document.querySelector('.country-region').textContent = country.region || 'N/A';
    document.querySelector('.country-sub-region').textContent = country.subRegion || 'N/A';
    document.querySelector('.country-capital').textContent = country.capital || 'N/A';
    document.querySelector('.country-tld').textContent = country.topLevelDomain || 'N/A';
    document.querySelector('.country-currencies').textContent = country.currencies || 'N/A';
    document.querySelector('.country-languages').textContent = country.languages || 'N/A';
}