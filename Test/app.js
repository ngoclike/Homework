// 1.
// let str_input = prompt("Nhập vào một chuỗi");
// let str_reverse = "";
// for (let i = str_input.length -1; i >= 0; i--) {
//     str_reverse += str_input.charAt(i);   
// }
// console.log(str_reverse);

// 2.
// let str_input = prompt("Nhập vào một chuỗi").split(" "); 
// let str = "";
// for (let i = 0; i < str_input.length; i++) {
//     str = str + " " + str_input[i].charAt(0).toUpperCase() + str_input[i].slice(1);
// }
// console.log(str);

// 3.
// let arr = [1,2,3,3,4,5,4,4,4,5,5];
// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//     if (newArr.indexOf(arr[i]) === -1)
//         newArr.push(arr[i]);
// }
// console.log(newArr);

// 4.
let mindX = [
    {
        name: "Đạt",
        age: 22,
        salary: 1000000000,
        position: "employee"
    },
    {
        name: "Hoàng",
        age: 18,
        salary: 2000000000,
        position: "employee"
    },
    {
        name: "Dũng",
        age: 25,
        salary: 3000000000,
        position: "employee"
    }
]
function printOut() {
    for (const i of mindX) {
        console.log(i);
    }
}
//printOut();
while (true) {
    let inputUser = prompt('Enter your command (Read, Create, Update, Delete)');
    if (inputUser == 'create') {
        let obj = {
            name: prompt('Enter name'),
            age: Number(prompt('Enter age')),
            salary: Number(prompt('Enter salary')),
            position: prompt('Enter position')
        }
        mindX.push(obj);
        printOut();
    } else if (inputUser == 'update') {
        let index = Number(prompt('Enter position:'));
        if (index >= mindX.length || index < 0) {
            console.log('Index not found');
        } else {
            mindX[index].name = prompt('Enter name');
            mindX[index].age = Number(prompt('Enter name'));
            mindX[index].salary = Number(prompt('Enter salary'));
            mindX[index].position = prompt('Enter position');
            console.clear();
            printOut();
        }
    } else if (inputUser == 'read') {
        printOut();
    } else if (inputUser == 'delete') {
        let index = Number(prompt('Enter position:'));
        if (index >= mindX.length || index < 0) {
            console.log('Index not found');
        } else {
            mindX.splice(index, 1);
            console.clear();
            printOut();
        }
    } else if (inputUser == 'e') {
        break;
    }else {
        console.log('You entered wrong');
    }
}