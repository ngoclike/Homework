const btn = document.getElementById('btn');
const myForm = document.getElementById('frm');
const myUl = document.getElementById('ul');
var i = 0
btn.onclick = function(event) {
    event.preventDefault();

    const userInput = myForm.title.value;
    let newLi = document.createElement('li');
    let newSpanIcon = document.createElement('span');
    let newSpan = document.createElement('span');
    newLi.classList.add("my-li");
    newSpanIcon.classList.add("sp3");
    newSpan.innerText = userInput;
    newSpan.classList.add("sp1");
    newLi.appendChild(newSpanIcon);
    newLi.appendChild(newSpan);
    myUl.appendChild(newLi);
    myForm.reset();

    newLi.setAttribute("end-task", "false");
    newLi.onclick = function() {
        let end_task = newLi.getAttribute("end-task")
        if (!(end_task === 'true')) {
            let ico = document.createElement('i');
            ico.classList.add("fa");
            ico.classList.add("fa-check");
            ico.setAttribute("aria-hidden", "true");
            newSpanIcon.classList.add("ic");
            newSpanIcon.appendChild(ico);
            newLi.classList.add("endTask");
            newSpan.classList.add("end");
            newLi.setAttribute("end-task", "true");
            newLi.classList.remove("my-li");
        } else {
            newLi.classList.add("my-li");
            newLi.classList.remove("endTask");
            newSpan.classList.remove("end");
            newSpanIcon.children[0].remove();
            //newSpanIcon.innerHTML = "";
            newSpanIcon.classList.remove("ic");
            newLi.setAttribute("end-task", "false");
        }
    }
    
    let icon = document.createElement('i');
    icon.classList.add("fa");
    icon.classList.add("fa-times");
    icon.classList.add("sp2");
    icon.setAttribute("aria-hidden", "true");
    newLi.appendChild(icon);
    icon.onclick = function() {
        newLi.remove();
    }
    
    let n = myUl.children.length - 1;
    if (n % 2 != 0) {
        myUl.children[n].classList.add("bc");
    }
}