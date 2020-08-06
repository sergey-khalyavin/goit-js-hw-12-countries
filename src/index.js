import debounce from 'lodash.debounce';
import fetchCountries from './js/fetch-countries';
import updateCountriesMarkup from './js/update-countries-markup';
import refs from './js/refs';
import './js/notifications';
import './sass/styles.scss';

const debounceInputHandler = debounce(event => {
  const inputValue = event.target.value;
  refs.list.innerHTML = '';
  if (!inputValue) {
    return;
  }
  fetchCountries(inputValue).then(updateCountriesMarkup);
}, 500);

refs.input.addEventListener('input', debounceInputHandler);
