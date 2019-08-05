/*************************************
 * logger(array)
 *
 * - Accepts an array
 * - Logs every element of the array
 ************************************/
const logger = function(array) {
	array.forEach(i => console.log(i))
  // Your code here
};

/*************************************
 * toCelsius(temperatures)
 *
 * - Accepts an array of temperatures
 *   in degrees Fahrenheit
 * - Returns an array of temperatures
 *   in degrees Celsius
 *
 * The conversion is:
 *   C = (F - 32) * (5/9)
 ************************************/
const toCelsius = temperatures => temperatures.map(i => (i-32)*(5/9))
  // Your code here


*************************************
 * hottestDays(temperatures, threshhold)
 *
 * - Accepts an array of temperatures
 * - Accepts a threshhold temperature
 * - Returns an array of temperatures
 *   that exceed the threshhold
 **************************************
const hottestDays = function(temperatures, threshhold) {
	let newerAR = temperatures.filter(temperature => temperature>threshhold)
	return newerAR
  // Your code here
};

/******************************************
 * logHottestDays(temperatures, threshhold)
 *
 * - Accepts an array of temperatures
 *   IN DEGREES FAHRENHEINT
 * - Accepts a threshhold temperature
 *   IN DEGREES FAHRENHEINT
 * - Logs temperatures that exceed the
 *   threshhold to the console
 *   IN DEGREES CELSIUS
 *
 * hint: you can combine
 *       all previous functions
 *******************************************/
const logHottestDays = function(temperatures, threshhold) {
logger(toCelsius(hottestDays(temperatures,threshhold)))
  // Your code here
};

export { logger, toCelsius, hottestDays, logHottestDays };
