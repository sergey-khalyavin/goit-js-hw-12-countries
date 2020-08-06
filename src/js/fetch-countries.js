function fetchCountries(query) {
  const url = `https://restcountries.eu/rest/v2/name/${query}`;

  return fetch(url)
    .then(res => res.json())
    .catch(error => console.log(error));
}

export default fetchCountries;
