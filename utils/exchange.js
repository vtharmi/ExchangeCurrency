const request = require("request");
require("dotenv").config();

//assigning the API_KEY in .env file
const api_key = process.env.API_KEY;

const getExchange = (currencyData, callback) => {
  let fromCurrency = currencyData.fromCurrency;
  let toCurrency = currencyData.toCurrency;
  let amount = currencyData.amount;

  const url = `http://data.fixer.io/api/convert?access_key=${api_key}&from=${fromCurrency}&to=${toCurrency}&amount=${amount}`;

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Problem in connecting to fixer api", undefined);
    } else {
      callback(undefined, response);
    }
  });
};

module.exports = getExchange;
