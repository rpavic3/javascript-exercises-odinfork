

const convertToCelsius = function(temp) {
  temp = (temp - 32) * (5/9)
  let rounded = Math.round(temp * 10) / 10
  return rounded

};

const convertToFahrenheit = function(temp) {
  temp = (temp * 9/5) + 32
  let rounded = Math.round(temp * 10) / 10
  return rounded

};
console.log(convertToCelsius(-100))
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
