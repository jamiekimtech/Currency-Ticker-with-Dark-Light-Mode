// Result(number)
const result = document.querySelector('.result');
const arrow = document.querySelector('.arrow');

var requestURL = 'https://api.exchangerate.host/latest?base=USD';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
  var response = request.response;
  var rounded = response.rates.KRW.toFixed(2);
  result.innerHTML = rounded;
};

// Fluctuation(arrow)

let today = new Date();
let yesterday = new Date(today);

yesterday.setDate(yesterday.getDate() - 1);

function dateString(elem) {
  let date = elem.getDate();
  if (date < 10) date = '0' + date;
  let month = elem.getMonth() + 1;
  if (month < 10) month = '0' + month;
  let year = elem.getFullYear();
  return `${year}-${month}-${date}`;
}

var requestURLF = `https://api.exchangerate.host/fluctuation?start_date=${dateString(
  today
)}&end_date=${dateString(yesterday)}`;
var requestF = new XMLHttpRequest();
requestF.open('GET', requestURLF);
requestF.responseType = 'json';
requestF.send();

requestF.onload = function () {
  var response = requestF.response.rates.KRW.change;
  if (response < 0) {
    arrow.innerHTML = '🠻';
  } else if (response > 0) {
    arrow.innerHTML = '🠹';
  } else {
    arrow.innerHTML = '-';
  }
};
