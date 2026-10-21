let x = 16.75;

let roundedValue = Math.round(x);
let squareRoot = Math.sqrt(x);
let power = Math.pow(x, 3);
let randomNumber = Math.floor(Math.random() * 41) + 10;

console.log(`Number: ${x}`);
console.log(`Rounded Value: ${roundedValue}`);
console.log(`Square Root: ${squareRoot}`);
console.log(`Power (x³): ${power}`);
console.log(`Random Number (10-50): ${randomNumber}`);

console.log(`
Math Utility Dashboard
----------------------
Number: ${x}
Rounded Value: ${roundedValue}
Square Root: ${squareRoot.toFixed(2)}
Power (x³): ${power}
Random Number: ${randomNumber}
`);