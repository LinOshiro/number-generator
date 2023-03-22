"use strict";

let generateBtn = document.getElementById("generate");
let min = document.getElementById("min");
let max = document.getElementById("max");

function randomNumber() {
  let minValue = Number(min.value);
  let maxValue = Number(max.value);
  //console.log(minValue, maxValue);
  if (minValue > maxValue) {
    minValue = maxValue + minValue;
    maxValue = minValue - maxValue;
    minValue = minValue - maxValue;
    min.value = minValue;
    max.value = maxValue;
  }
  let number = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
  //console.log(number);
  document.getElementById("result").innerText = number;
}
window.addEventListener("load", randomNumber());
generateBtn.addEventListener("click", randomNumber);
