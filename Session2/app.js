// 1.
// a.
// for(let i = 0; i < 7; i++) {
//     console.log(i);
// }

// b.
// let n = Number(prompt('Enter a number:'));
// for (let index = 0; index < n; index++) {
//     console.log(index);
// }

// c.
// let n = Number(prompt('Enter a number:'));
// for (let index = 3; index < n; index++) {
//     console.log(index);
// }

// d.
// let n = Number(prompt('Enter n:'));
// let c = Number(prompt('Enter c:'));
// for (let index = c; index < n; index++) {
//     console.log(index);
// }

// e.
// let n = Number(prompt('Enter n:'));
// let c = Number(prompt('Enter c:'));
// for (let index = c; index < n; index += 3) {
//     console.log(index);
// }

// f.
// let n = Number(prompt('Enter n:'));
// let c = Number(prompt('Enter c:'));
// let s = Number(prompt('Enter s:'));
// for (let index = c; index < n; index += s) {
//     console.log(index);
// }

// 2.
// let n = Number(prompt('Enter n:'));
// let fac = 1;
// for (let index = 1; index <= n; index++) {
//     fac = fac*index;
// }
// alert('The factorial of ' + n + ' is ' + fac);

// 3.
// let old = Number(prompt('How old are you?'));
// if (old < 14) {
//     alert('You are not old enought to view this content');
// } else {
//     alert('Enjoy!');
// }

// 4.
// let x = Number(prompt('Enter a number:'));
// if (x >= 0 && x <= 4) {
//     alert('Lower half of 9');
// } else if (x <= 9) {
//     alert('Higher half of 9');
// }

// 5.
// let n = Number(prompt('Enter n:'));
// let x = Number(prompt('Enter x:'));
// if (x >= 0 && x <= n/2) {
//     alert('Lower half of ' + n);
// } else if (x <= n) {
//     alert('Higher half of ' + n);
// }

// 6.
// let x = Number(prompt('Enter x:'));
// if (x % 2 === 0) {
//     alert(x + ' is an even number');
// } else {
//     alert(x + ' is an odd number');
// }

// 7.
// a.
// let L = 0;
// let H = 0;
// for (let index = 1; index <= 6; index++) {
//     if (index <= 3) {
//         L += 1;
//         console.log(' L');
//     } else {
//         H += 1;
//         console.log(' H');
//     }
// }

// b.
// let n = Number(prompt('Enter the total number of L\'s and H\'s?'))
// let L = 0;
// let H = 0;
// for (let index = 1; index <= n; index++) {
//     if (index <= (n/2).toFixed()) {
//         L += 1;
//         console.log(' L');
//     } else {
//         H += 1;
//         console.log(' H');
//     }
// }

// c.
// for (let index = 0; index < 4; index++) {
//     console.log(0);
//     console.log(1);
// }

// d.
// let n = Number(prompt('Enter the total number of 1\'s and 0\'s?'));
// for (let index = 0; index < n; index++) {
//     if (index % 2 == 0) {
//         console.log(0);
//     } else {
//         console.log(1);
//     }
// }

// 8.
let weight = parseFloat(prompt('Your weight in kg?'));
let heightCent = parseFloat(prompt('Your height in cm?'));
let heightMet = (heightCent / 100);
let BMI = (weight / (heightMet * heightMet)).toFixed(1);
alert('Your BMI is ' + BMI);
if (BMI < 16) {
    alert('You are severely underweight');
} else if (BMI <= 18.5) {
    alert('You are underweight');
} else if (BMI <= 25) {
    alert('You are normal');
} else if (BMI <= 30) {
    alert('You are overweight');
} else {
    alert('You are obese ');
}


