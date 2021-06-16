const btn = document.getElementById("btn");
const myForm = document.getElementById("form");
const ul = document.getElementById("ul")

myForm.onsubmit = function(e) {
    e.preventDefault();
    const title = (myForm.title.value);
    const newLi = document.createElement("li");
    const btnDelete = document.createElement("button");
    newLi.innerHTML = title;
    btnDelete.innerHTML = "Delete";
    ul.appendChild(newLi);
    newLi.appendChild(btnDelete);
    btnDelete.onclick = function() {
        // btnDelete.parentElement.remove();
        newLi.remove();
    }
}

