const arrow = document.querySelector('.arrow');

// Get today's date and calculate yesterday's date
let today = new Date();
let yesterday = new Date(today);
yesterday.setDate(yesterday.getDate() - 1);

// Function to format a date as 'YYYY-MM-DD' string
function dateString(elem) {
  let date = elem.getDate().toString().padStart(2, '0');
  let month = (elem.getMonth() + 1).toString().padStart(2, '0');
  let year = elem.getFullYear();
  return `${year}-${month}-${date}`;
}

export const getFluctuation = async function () {
  try {
    // Fetch currency fluctuation data from API for the time range of yesterday to today
    const response = await fetch(
      `https://api.exchangerate.host/fluctuation?start_date=${dateString(
        today
      )}&end_date=${dateString(yesterday)}`
    );
    const responseData = await response.json();
    const fluc = responseData.rates.KRW.change;

    // Update the content of the 'arrow' element based on the fluctuation value
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
