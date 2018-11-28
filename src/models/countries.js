const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js');

const Countries = function (){
  this.countriesData = null;
}

Countries.prototype.getData = function () {
  const requestHelper = new RequestHelper('https://restcountries.eu/rest/v2/all');
  requestHelper.get((allCountryData) => {
    this.countriesData = allCountryData;
    const countryNames = allCountryData.map((country) => {
      return country.name;
    });
    PubSub.publish('Countries:country-names', countryNames);
  })
};

Countries.prototype.bindEvents = function () {
  // getData -> Function that then publishes it to view
  this.getData();

  PubSub.subscribe('SelectView:option-selected', (event) => {
    const countryIndex = event.detail;
    const country = this.countriesData[countryIndex];
    PubSub.publish('Countries:country-selected', country);
  });
};

module.exports = Countries;
