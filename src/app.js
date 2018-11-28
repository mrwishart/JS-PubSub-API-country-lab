const Countries = require('./models/countries.js');
const SelectView = require('./views/select_view');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const element = document.querySelector('#countries');
  const selectView = new SelectView(element);
  selectView.bindEvents();


  const countries = new Countries();
  countries.bindEvents();


});
