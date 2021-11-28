//Base Kelvin temperature
const kelvin = 300;
// Kelvin converted to Celsius
let celsius = kelvin - 273;
// Celsius converted to Farenheit
let fahrenheit = celsius * (9/5) + 32;
//Rounded Fahrenheit  temperature
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${celsius} degrees celsius`);
console.log(`In Fahrenheit, that would be ${fahrenheit} degrees`);

// Bonus: Celsius converted to Newton
// let newton = celsius * (33/100);
// newton = Math.floor(newton);
// console.log(`The temperature is ${newton} degrees Newton`);
