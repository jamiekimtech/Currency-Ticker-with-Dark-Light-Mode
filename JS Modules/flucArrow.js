const arrow = document.querySelector('.arrow');

let today = new Date();
let yesterday = new Date(today);

yesterday.setDate(yesterday.getDate() - 1);

function dateString(elem) {
  let date = elem.getDate().toString().padStart(2, '0');
  let month = (elem.getMonth() + 1).toString().padStart(2, '0');
  let year = elem.getFullYear();
  return `${year}-${month}-${date}`;
}

export const getFluctuation = function () {
  fetch(
    `https://api.exchangerate.host/fluctuation?start_date=${dateString(
      today
    )}&end_date=${dateString(yesterday)}`
  )
    .then((response) => {
      return response.json();
    })
    .then((responseData) => {
      const fluc = responseData.rates.KRW.change;
      fluc < 0
        ? (arrow.innerHTML = `<i class="fa-solid fa-caret-down"></i>`)
        : fluc > 0
        ? (arrow.innerHTML = `<i class="fa-solid fa-caret-up"></i>`)
        : (arrow.innerHTML = '-');
    });
};
