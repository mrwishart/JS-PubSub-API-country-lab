const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js');

const Countries = function (){
  this.data = null;
}

Countries.prototype.getData = function () {
  const requestHelper = new RequestHelper('https://restcountries.eu/rest/v2/all');
  requestHelper.get((data) => {
    this.data = data;
    const countryNames = data.map((country) => {
      return country.name;
    });
    PubSub.publish('Countries:country-names', countryNames);
  })
};

Countries.prototype.bindEvents = function () {
  // getData -> Function that then publishes it to view
  this.getData();
};

module.exports = Countries;
