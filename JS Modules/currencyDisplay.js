export const result = document.querySelector('.result');

export const getCurrency = function () {
  fetch('https://api.exchangerate.host/latest?base=USD')
    .then((response) => {
      return response.json();
    })
    .then((responseData) => {
      result.innerHTML = responseData.rates.KRW.toFixed(2);
    });
};
