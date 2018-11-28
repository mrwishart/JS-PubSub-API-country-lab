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


};

module.exports = CountryInfoView;
