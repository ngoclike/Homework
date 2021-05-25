// 1.
alert('Hi '+ prompt('Hi there, your name please?') + '\nHave a nice day!');

// 2.
let firstName = prompt('Enter your first name:');
let lastName = prompt('Enter your last name:');
alert(`Hi ${lastName} ${firstName}
Have a nice day!`);

// 3. 
let a = Number(prompt('Enter side length of the square'));
let area = a*a;
alert('The square area is ' + area);

// 4.
const pi = 3.14;
let r = parseFloat((prompt('Enter the radius of the circle')));
let area = (pi*r**2).toFixed(1);
alert('The circle area is ' + area);

// 5.
let tempC = parseFloat(prompt('Enter the temperature in Celcius'));
let tempF = (tempC * 1.8 + 32).toFixed(1);
alert(tempC + ' (C) = '+ tempF + ' (F)');

