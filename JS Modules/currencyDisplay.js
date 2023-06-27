export const result = document.querySelector('.result');

export const getCurrency = async function () {
  try {
    const response = await fetch(
      'https://api.exchangerate.host/latest?base=USD'
    );
    const responseData = await response.json();

    // Update 'result' with the formatted Korean Won (KRW) exchange rate
    result.innerHTML = responseData.rates.KRW.toFixed(2);
  } catch (error) {
    console.log(error);
  }
};
