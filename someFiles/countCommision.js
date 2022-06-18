'use strict';
// Эта функция высчитывает комиссию с транзакции в различных валютах
//
/**
 * @param {number} amount
 * @param {string} currency
 * @return {number}
 */
function countCommision(amount, currency) {
  let commision;
  if (currency === 'UAH') {
    if (amount <= 1000) commision = (amount * 2) / 100;
    else commision = (amount * 1) / 100;
    return commision;
  }
  if (currency === 'USD') {
    if (amount <= 5000) commision = (amount * 0.5) / 100;
    else commision = (amount * 0.25) / 100;
    return commision;
  }
  if (currency === 'EUR') {
    if (amount <= 3000) commision = (amount * 0.75) / 100;
    else commision = (amount * 0) / 100;
    return commision;
  }
  return commision;
}

// examples
console.log(countCommision(20000, 'USD')); // ===> 50
console.log(countCommision(500, 'UAH')); // ===> 10
console.log(countCommision(2000, 'UAH')); // ===> 20
console.log(countCommision(2000, 'EUR'));
console.log(countCommision(4000, 'EUR'));
