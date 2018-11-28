const PubSub = require('../helpers/pub_sub.js');

const CountryInfoView = function (element) {
  this.element = element;
};

CountryInfoView.prototype.bindEvents = function () {
  PubSub.subscribe('Countries:country-selected', (event) => {
    const country = event.detail;
    this.renderCountry(country);
  });
};

CountryInfoView.prototype.renderCountry = function (country) {
  this.element.innerHTML = '';

  countryInfoDiv = document.createElement('div');
  countryInfoDiv.classList.add('country-info');
  this.element.appendChild(countryInfoDiv);

  nameElement = document.createElement('h3');
  nameElement.textContent = country.name;
  countryInfoDiv.appendChild(nameElement);

  regionElement = document.createElement('p');
  regionElement.textContent = `Region: ${country.region}`;
  countryInfoDiv.appendChild(regionElement);



  languageList = document.createElement('ul');
  languageList.textContent = "Language(s):";

  country.languages.forEach((language) => {
    languageElement = document.createElement('li');
    languageElement.textContent = language.name;
    languageList.appendChild(languageElement);
  });

  countryInfoDiv.appendChild(languageList)

  countryFlagDiv = document.createElement('div');
  countryFlagDiv.classList.add('country-flag');
  this.element.appendChild(countryFlagDiv);

  countryFlagElement = document.createElement('img');
  countryFlagElement.src = country.flag;
  countryFlagDiv.appendChild(countryFlagElement);
};

module.exports = CountryInfoView;
