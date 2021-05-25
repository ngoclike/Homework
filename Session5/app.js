//1.
function checkString(myStr) {
    return myStr.indexOf('Java') == 0;
}
// console.log(checkString('Java hello Java'));

// 2.
function findMaxDiff(myInter) {
    if (myInter.length < 2) {
        return 0;
    } else {
        let maxDiff = 0;
        for (let i = 0; i < myInter.length; i++) {
            let a = Math.abs(myInter[i] - myInter[i -1]);
            if (maxDiff < a) {
                maxDiff = a;
            }
        }
        return maxDiff;
    }
}
// console.log(findMaxDiff([1, -10, 5, 18, -9, 5]));

//
function findMaxDiff(myInter) {
    if (myInter.length < 2) {
        return 0;
    } else {
        let maxDiff = 0;
        for (let i = 0; i < myInter.length; i++) {
            maxDiff = maxDiff < Math.abs(myInter[i] - myInter[i -1])  ? maxDiff = Math.abs(myInter[i] - myInter[i -1]) : maxDiff;
        }
        return maxDiff;
    }
}
// console.log(findMaxDiff([1, -10, 5, 18, -9, 5]));

// 3.
function firstValue(arr, n) {
    if (n <= 0) {
        return arr = [];
    } else if (n > arr.lenght) {
        return arr;
    } else {
        let firstArr = [];
        for (let index = 0; index < arr.length; index++) {
            if (index < n) {
                firstArr.push(arr[index]);
            }
        }
        return firstArr;
    }
}
// console.log(firstValue([10, 3, -6, 22, 9, -41, 56], 8));

// 4.
function checkInt (number1, number2) {
    if (number1 > 0 &&  number2 < 0 || number1 < 0 && number2 > 0 || number1 > 0 && number2 > 0) {
        return true;
    } else if (number1 == 0 || number2 == 0) {
        return 0;
    } else {
        return false;
    }
}
// console.log(checkInt(-1, 6));

// 5.
function exercise5(n) {
    let difference = Math.abs(n - 13);
    if (n > 13) {
        return difference *= 2;
    } else {
        return difference;
    }
}
// console.log(exercise5(20));

// 6.

function findMax(arr) {
    //arr.sort();
    let max = 0;
    for (let i = 0; i < arr.length -1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let tempt = arr[i];
                arr[i] = arr[j];
                arr[j] = tempt;
            }
        }
    }
    let difference = Math.abs(arr[arr.length - 1] - arr[0])
    return difference;
}
// console.log(findMax([7, 4, -1, 15, 2]));