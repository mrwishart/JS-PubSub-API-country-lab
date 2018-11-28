const Countries = require('./models/countries.js');
const SelectView = require('./views/select_view');
const CountryInfoView = require('./views/country_info_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const countryInfoViewElement = document.querySelector('#country')
  const countryInfoView = new CountryInfoView(countryInfoViewElement);
  countryInfoView.bindEvents();

  const element = document.querySelector('#countries');
  const selectView = new SelectView(element);
  selectView.bindEvents();


  const countries = new Countries();
  countries.bindEvents();


});
