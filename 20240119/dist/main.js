var preValue = 0;
var isOperatorActive = false;
function handleClickNumber(value) {
    var displayEl = document.getElementById("display");
    if (isOperatorActive) {
        displayEl.innerText += String(value);
        isOperatorActive = false;
    }
    else {
        displayEl.innerText += String(value);
    }
}
function handleClickPlus() {
    // 현재 입력된 값을 어딘가에다가 저장해 두어야 한다
    var displayEl = document.getElementById("display");
    preValue = Number(displayEl.innerText);
    isOperatorActive = true;
}
function handleClickEqual() {
    var displayEl = document.getElementById("display");
    var currentValue = Number(displayEl.innerText);
    var result = preValue + currentValue;
    displayEl.innerText = String(result);
}
