function toFahrenheit(celsius) {
	return((celsius * 1.8) + 32).toFixed(2);
 // Write your code here
}

// Do not change the code below
const celsius = prompt("Enter Celsius:");
alert(toFahrenheit(Number(celsius)));
