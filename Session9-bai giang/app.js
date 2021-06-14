// const app = document.getElementById("app");
// app.style.color = 'red';
// app.style.backgroundColor = 'yellow';
// app.style.fontSize = '50px';
// app.innerHTML = "<b>Guten Tag</b>"
// // app.style.fontWeight = 'bold';
// const myul = document.getElementById("ul")
// console.log(myul.children[0].parentElement);

// console.log(myul.classList);
// myul.classList.add("li");
// console.log(myul);
//console.log(myul.children[0].remove());
// const myli = document.createElement("li");
// myli.innerHTML = "Marketer";
// myli.style.color = 'green';
// myli.style.backgroundColor = 'pink';
// myli.style.fontSize = "50px";
// console.log(myul.appendChild(myli));

const ul = document.getElementById("ul");
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
btn1.onclick = function () {
    let content = prompt("Enter something:");
    const newli = document.createElement('li');
    newli.innerHTML = content;
    ul.appendChild(newli);
}

btn2.onclick = function () {
    let n = ul.children.length - 1;
    ul.children[n].remove();
}