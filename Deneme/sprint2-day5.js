
//SORU 1 -------------------------------------------------------------------------------------------------------------------

const { arabaStogu } = require('./arabaStogu.js');

const convertCurrency = (arabalar, dolarKuru) => {
  const yeniFiyat = arabalar.map((cars) => cars.selling_price * dolarKuru);
  for (let i = 0; i < arabalar.length; i++) {
    arabalar[i].selling_price = yeniFiyat[i];
  }
  return arabalar;
};
console.log(convertCurrency(data, 28.45));

/* Bu satırdan sonraki satırları silmeyin! */
module.exports = convertCurrency;

//SORU 2  ------------------------------------------------------------------------------------------------------------------

const { arabaStogu } = require('./arabaStogu.js');

function analyzeData(arabalar, marka, modelyil) {
  const istenenCar = arabalar.filter(
    (car) => car.name.includes(marka) && car.year === modelyil
  );
  return istenenCar;
}
console.log(analyzeData(arabaStogu, 'Hyundai', 2012));

/* Bu satırdan sonraki satırları silmeyin! */
module.exports = analyzeData;
