// Bài tập trên lớp
// cho ng dùng nhập vào 4 thao tác là chữ (C/R/U/D)
// C: cho user nhập nội dung và push vào cuối mảng
// R: in ra toàn bộ nd mảng đó
// U: Hỏi user chỉ số muốn cập nhật
// cập nhật gtri đó và in ra mảng
// D: hỏi user chỉ số muốn xóa
// xóa và in ra mảng

// chạy vô hạn
// bấm e : thoát
//else "nhập sai r, nhập lại đi"

let arr = ['Hôm nay ăn gì?', 'Thời tiết hôm nay thế nào'];
while (true) {
    let userInput = prompt('Todo app - Chỉ được nhập C/R/U/D').toUpperCase();
    if (userInput === 'C') {
        let input = prompt('Nhập nội dung đi:');
        arr.push(input);
        console.log(arr);
    } else if (userInput === 'R') {
        for (let index = 0; index < arr.length; index++) {
            console.log(arr[index]);
        }
        console.log('-------------');
    } else if (userInput === 'U') {
        let i = 0;
        while (true) {
            i = Number(prompt('Bạn muốn cập nhật phần tử thứ mấy?'));
            // user nhập vào chữ / chỉ số lớn hớn chỉ số của mảng.
            if (i > arr.length - 1) {
                alert('Bạn đã nhập quá phần tử của mảng')
            } else if (isNaN(i)) {
                alert('Bạn đã nhập kí tự chữ')
            } else {
                break;
            } 
        }
        let newContent = prompt('Nhập thông tin muốn cập nhật');
        arr[i] = newContent;     
        for (let index = 0; index < arr.length; index++) {
            console.log(arr[index]);
        }
        console.log('-------------');
    } else if (userInput === 'D') {
        let i = 0;
        while (true) {
            i = Number(prompt('Bạn muốn xóa phần tử thứ mấy?'));
            // user nhập vào chữ / chỉ số lớn hớn chỉ số của mảng.
            if (i > arr.length - 1) {
                alert('Bạn đã nhập quá phần tử của mảng')
            } else if (isNaN(i)) {
                alert('Bạn đã nhập kí tự chữ')
            } else {
                break;
            } 
        }
        arr.splice(i,1);   
        for (let index = 0; index < arr.length; index++) {
            console.log(arr[index]);
        }
        console.log('-------------');
    } else if (userInput === 'E') {
        break;
    } else {
        console.log('Nhập lại đi');
    }
}

// BTVN
// 1.
let inputUser = prompt('Enter a sequence of numbers, separated by commas (,)').split(",");
let arr = new Array(0);
let sum = 0;
for (let index = 0; index < inputUser.length; index++) {
    arr.push(Number(inputUser[index]));
}
for (let index = 0; index < arr.length; index++) {
    sum += arr[index];
}
alert('The sum of them is ' + sum);

// 2.
let inputUser = prompt('Enter a sequence of numbers, separated by \",\"').split(",");
let arr = new Array(0);
for (let index = 0; index < inputUser.length; index++) {
    arr.push(Number(inputUser[index]));
}
arr.sort();
alert('The smallest number is ' + arr[0]);

// 3.
const arr = [3, 4, 6, -9, 10, -88, 2];
let inputUser = prompt('Enter the number');
let tempt = false;
let i = 0;
for (let index = 0; index < arr.length; index++) {
    if (arr[index] == inputUser) {
        tempt = true;
        i = index;
        //break;
    }
}
if (tempt == true) {
    alert(inputUser + ' is FOUND in my array at index ' + i);
} else {
    alert(inputUser + ' is NOT found in my array');
}

// 4.
// 4.1
const arr = [5, 7, 300, 90, 24, 50, 75];
console.log('Hello, my name is Ngoc Nhu and here is my sheep sizes:');
console.log(arr.join(' '));

// // 4.2
console.log('');
let max = Math.max(...arr);
console.log('Now my biggest sheep has size ' + max +', let\'s shave it');

// // 4.3
console.log('');
console.log('After shearing, here is my flock');
let a = arr.indexOf(max);
arr[a] = 8;
console.log(arr.join(' '));

// // 4.4
for (let i = 1; i < 4; i++) {
    console.log('');
    console.log('MONTH ' + i);
    console.log('One month has, passed, my sheep have grown, here are their sizes');
    for (let index = 0; index < arr.length; index++) {
        arr[index] += 50;
    }
    console.log(arr.join(' '));
    // 4.5
    if (i == 3) {
        // 4.6
        console.log('');
        let sum = 0;
        for (let index = 0; index < arr.length; index++) {
            sum += arr[index];
        }
        console.log('My flock has size in total: ' + sum);
        console.log('I would get ' + sum + ' * 2$ = '+ sum*2);
        break;
    }
    console.log('');
    let max = Math.max(...arr);
    console.log('Now my biggest sheep has size ' + max +', let\'s shave it');
    //
    console.log('');
    console.log('After shearing, here is my flock');
    let a = arr.indexOf(max);
    arr[a] = 8;
    console.log(arr.join(' '));
}

// 5.
let inputUser = prompt('Enter the sequence of names').split(',');
let arr = new Array(0);
for (let index = 0; index < inputUser.length; index++) {
    arr.push('<'+inputUser[index]+'>');
}
alert(inputUser + ' => ' + arr);

// 6.
let inputUser = prompt('Enter a sequence of numbers, separated by commas (,)').split(",");
let arr = new Array(0);
for (let index = 0; index < inputUser.length; index++) {
    let a = Number(inputUser[index]);
    if (a % 2 != 0) {
        arr.push(a);
    }
}
alert(inputUser + ' => ' + arr.toString());