// 1.
// let products = [
//     {
//         name: "Xiaomi portable charger 20000mah",
//         price: 428,
//         brand: "Xiaomi",
//         category: "Charger",
//         color: "White"
//     },
//     {
//         name: "VSmart Active 1",
//         price: 5487,
//         brand: "VSmart",
//         category: "Phone",
//         color: "Black"
//     },
//     {
//         name: "IPhone X",
//         price: 21490,
//         brand: "Apple",
//         category: "Phone",
//         color: "Gray"
//     },
//     {
//         name: "Samsung Galaxy A9",
//         price: 8490,
//         brand: "Samsung",
//         category: "Phone",
//         color: "Blue"
//     }
// ]
// 1.1
// for (let index = 0; index < products.length; index++) {
//     console.log('Name: ' + products[index].name);
//     console.log('Price: ' + products[index].price);
//     console.log('--------------------------------');
// }

// 1.2
// for (let index = 0; index < products.length; index++) {
//     let i = index + 1;
//     console.log('#' + i + '. ' + products[index].name);
//     console.log('    Price: ' + products[index].price);
// }
// let index = Number(prompt('Enter product position'));
// console.clear();
// console.log('Name: ' + products[index].name);
// console.log('Brand: ' + products[index].brand);
// console.log('Price: ' + products[index].price);
// console.log('Color: ' + products[index].color);
// console.log('Category: ' + products[index].category);

// 1.3
// let categoryInput =  prompt('Enter your category');
// let category = categoryInput[0].toUpperCase() + categoryInput.slice(1);
// let newProducts = products.filter(obj => obj.category == category);
// for (let index = 0; index < newProducts.length; index++) {
//     console.log('Name: ' + newProducts[index].name);
//     console.log('Price: ' + newProducts[index].price);
//     console.log('--------------------------------');
// }

// 1.4
// let products = [
//     {
//         name: "Xiaomi portable charger 20000mah",
//         price: 428,
//         brand: "Xiaomi",
//         category: "Charger",
//         color: "White",
//         providers: "Phukienzero dientuccc"
//     },
//     {
//         name: "VSmart Active 1",
//         price: 5487,
//         brand: "VSmart",
//         category: "Phone",
//         color: "Black",
//         providers: "tgdd, vhstore, abc"
//     },
//     {
//         name: "IPhone X",
//         price: 21490,
//         brand: "Apple",
//         category: "Phone",
//         color: "Gray",
//         providers: "tgdd"
//     },
//     {
//         name: "Samsung Galaxy A9",
//         price: 8490,
//         brand: "Samsung",
//         category: "Phone",
//         color: "Blue",
//         providers: "tgdd"
//     }
// ]
// for (let index = 0; index < products.length; index++) {
//     let i = index + 1;
//     console.log('#' + i + '. ' + products[index].name);
//     console.log('    Price: ' + products[index].price);
//     console.log('    Providers: ' + products[index].providers);
// }

// // 1.5
// console.clear();
// let providerInput =  prompt('Enter your category');
// for (let index = 0; index < products.length; index++) {
//     if (products[index].providers.indexOf(providerInput) != -1) {
//         console.log('Name: ' + products[index].name);
//         console.log('Price: ' + products[index].price);
//         console.log('Brand: ' + products[index].brand);
//         console.log('Color: ' + products[index].color);
//         console.log('Category: ' + products[index].category);
//         console.log('Products: ' + products[index].providers);
//         console.log('--------------------------------');
//     }
// }

// 2.
let frontEnd = [
    {
        subject: "HTML",
        complete: false
    },
    {
        subject: "CSS",
        complete: false
    },
    {
        subject: "Basics of JavaScript",
        complete: false
    },
    {
        subject: "Node Package Manager (npm)",
        complete: false
    },
    {
        subject: "Git",
        complete: false
    }
]
function printOut() {
    console.log('Hi there, this is your learning tasks to front-end developer career:');
    for (let index = 0; index < frontEnd.length; index++) {
        let i = index + 1;
        console.log(i + '. ' + frontEnd[index].subject);
        console.log('   Complete: ' + frontEnd[index].complete);
    }
}
function print() {
    console.log('Hi there, this is your learning tasks to front-end developer career:');
    for (let index = 0; index < frontEnd.length; index++) {
        let i = index + 1;
        if (frontEnd[index].complete == true) {
            console.log(i + '. [x] ' + frontEnd[index].subject);
        } else {
            console.log(i + '. [ ] ' + frontEnd[index].subject);
        }
    }
}
// 2.1 
printOut();

// 2.2
while (true) {
    let inputUser = prompt('Enter your command (New, Delete, Update, Complete)');
    if (inputUser == 'new') {
        let newContent = prompt('Enter new task');
        let obj = {
            subject: newContent[0].toUpperCase() + newContent.slice(1),
            complete: false 
        }
        frontEnd.push(obj);
        console.clear();
        printOut();
    } else if (inputUser == 'update') {
        let index = Number(prompt('Enter position:'));
        if (index >= frontEnd.length || index < 0) {
            console.log('Index not found');
        } else {
            let newContent = prompt('Enter new title');
            frontEnd[index].subject = newContent;
            console.clear();
            printOut();
        }
    } else if (inputUser == 'complete') {
        let index = Number(prompt('Enter position:'));
        if (index >= frontEnd.length || index < 0) {
            console.log('Index not found');
        } else {
            frontEnd[index].complete = true;
            console.clear();
            printOut();
        }
    } else if (inputUser == 'delete') {
        let index = Number(prompt('Enter position:'));
        if (index >= frontEnd.length || index < 0) {
            console.log('Index not found');
        } else {
            frontEnd.splice(index, 1);
            console.clear();
            printOut();
        }
    } else if (inputUser == 'optional') {
        console.clear();
        print();
    } else if (inputUser == 'e') {
        break;
    }else {
        console.log('You entered wrong');
    }
}
//Package Manager (npm or yarn)

