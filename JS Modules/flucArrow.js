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

export const getFluctuation = async function () {
  try {
    const response = await fetch(
      `https://api.exchangerate.host/fluctuation?start_date=${dateString(
        today
      )}&end_date=${dateString(yesterday)}`
    );
    const responseData = await response.json();
    const fluc = responseData.rates.KRW.change;
    arrow.innerHTML =
      //check if fluctuation of currency is greater than 0
      fluc < 0
        ? //if less than zero generate and arrow pointing down
          '<i class="fa-solid fa-caret-down"></i>'
        : fluc > 0
        ? //if greater than zero generate an arrow pointing up
          '<i class="fa-solid fa-caret-up"></i>'
        : //if zero generate a dash
          '-';
  } catch (error) {
    console.log(error);
  }
};
