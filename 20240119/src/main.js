"use strict";
let preValue = 0;
let isOperatorActive = false;
function handleClickNumber(value) {
    const displayEl = document.getElementById("display");
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
    const displayEl = document.getElementById("display");
    preValue = Number(displayEl.innerText);
    isOperatorActive = true;
}
function handleClickEqual() {
    const displayEl = document.getElementById("display");
    const currentValue = Number(displayEl.innerText);
    const result = preValue + currentValue;
    displayEl.innerText = String(result);
}
