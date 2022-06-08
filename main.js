//Base Kelvin temperature
// let kelvin = document.getElementById('input').value;
let kelvin = 0;

let convert = () => {
  if (typeof kelvin !== 'number') {
    console.log('Enter a valid number')
  }
  // Kelvin converted to Celsius
  let celsius = kelvin - 273;
  console.log(celsius)
  // Celsius converted to Farenheit
  let fahrenheit = celsius * (9 / 5) + 32;
  console.log(fahrenheit)
  //Rounded Fahrenheit  temperature
  fahrenheit = Math.floor(fahrenheit);
  // Bonus: Celsius converted to Newton
  let newton = celsius * (33 / 100);
  newton = Math.floor(newton);
  console.log(newton)

  document.getElementById('celsius').innerHTML = `${celsius}`;
  document.getElementById('fahrenheit').innerHTML = `${fahrenheit}`;
  document.getElementById('newton').innerHTML = `${newton}`;
}
convert();
// Grab whatever is input - done
// make sure it's a number
// convert them to all 3 units 
// place them in the html  
// fire off function on click
