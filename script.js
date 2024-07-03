// Variables of different data types
let greeting = 'Hello, world!';
let number = 42;
let isJavaScriptFun = true;

// Functions to perform simple operations
function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function divide(a, b) {
	return a / b;
}

function multiply(a, b) {
	return a * b;
}

// DOM Manipulation
document.getElementById('addBtn').addEventListener('click', function () {
	let num1 = parseFloat(document.getElementById('num1').value);
	let num2 = parseFloat(document.getElementById('num2').value);
	let result = add(num1, num2);
	document.getElementById('result').textContent = 'Result: ' + result;
});

document.getElementById('subtractBtn').addEventListener('click', function () {
	let num1 = parseFloat(document.getElementById('num1').value);
	let num2 = parseFloat(document.getElementById('num2').value);
	let result = subtract(num1, num2);
	document.getElementById('result').textContent = 'Result: ' + result;
});

document.getElementById('divideBtn').addEventListener('click', function () {
	let num1 = parseFloat(document.getElementById('num1').value);
	let num2 = parseFloat(document.getElementById('num2').value);
	let result = divide(num1, num2);
	document.getElementById('result').textContent = 'Result: ' + result;
});

document.getElementById('multiplyBtn').addEventListener('click', function () {
	let num1 = parseFloat(document.getElementById('num1').value);
	let num2 = parseFloat(document.getElementById('num2').value);
	let result = multiply(num1, num2);
	document.getElementById('result').textContent = 'Result: ' + result;
});

// Logging variables to the console
console.log(greeting);
console.log(number);
console.log(isJavaScriptFun);

// Chart.js integration
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
	type: 'bar',
	data: {
		labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
		datasets: [
			{
				label: '# of Votes',
				data: [12, 19, 3, 5, 2, 3],
				backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(255, 206, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(153, 102, 255, 0.2)',
					'rgba(255, 159, 64, 0.2)',
				],
				borderColor: [
					'rgba(255, 99, 132, 1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(153, 102, 255, 1)',
					'rgba(255, 159, 64, 1)',
				],
				borderWidth: 1,
			},
		],
	},
	options: {
		scales: {
			y: {
				beginAtZero: true,
			},
		},
	},
});
