//de voorspelling van vandaag in Kelvin
const kelvin = 293;
//de graden in celsius is altijd 273 lager
const celsius = kelvin-273;
//hier wordt de graden celsius omgerekend in fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;

let newton = celsius * (33 / 100);
//soms komt er een kommagetal uit hier wordt die omgezet in een heel getal.
fahrenheit = Math.floor(fahrenheit);
newton = Math.floor(newton);

console.log(`Het is ${fahrenheit} graden in Fahrenheit.`);
console.log(`Het is ${newton} graden in newton`);