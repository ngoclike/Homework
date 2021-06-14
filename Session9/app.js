const btnHide = document.getElementById("btn-hide");
btnHide.onclick = function() {
    const block1 = document.getElementById("bl1");
    if (block1.style.display === "none") {
        block1.style.display = "block";
    } else {
        block1.style.display = "none";
    }
}
const btnReverseBlock = document.getElementById("btn-reverse-block");
btnReverseBlock.onclick = function() {
    const block3 = document.getElementById("bl3");
    const block4 = document.getElementById("bl4");
    let blockTemp = block3.innerHTML;
    block3.innerHTML = block4.innerHTML;
    block4.innerHTML = blockTemp;
}

const btnChangeColor = document.getElementById("btn-change-color");
btnChangeColor.onclick = function() {
    const block2 = document.getElementById("bl2");
    block2.style.backgroundColor = "rgb(" + 
    Math.floor(Math.random() * 255) + "," +
    Math.floor(Math.random() * 255) + "," +
    Math.floor(Math.random() * 255) + ")";
}

const btnIncreaseFont = document.getElementById("btn-increase-font");
btnIncreaseFont.onclick = function() {
    const block5 = document.getElementById("bl5");
    const currentSize = parseFloat(window.getComputedStyle(block5, null).getPropertyValue('font-size'));
    // block5.style.fontSize = (currentSize + 1) + 'px';
    block5.style.fontSize = `${currentSize + 1}px`;
}