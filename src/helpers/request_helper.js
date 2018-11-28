const RequestHelper = function (url) {
  this.url = url;
}

RequestHelper.prototype.get = function (onComplete) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', this.url);
  // xhr.setRequestHeader('Accept')
  xhr.send();

  xhr.addEventListener('load', () => {
    rawData = xhr.responseText;
    data = JSON.parse(rawData);
    this.data = data;
    onComplete(data);
  })
};

module.exports = RequestHelper
