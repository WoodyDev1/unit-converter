/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("number-input")
const convertBtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length")
const volumeEl = document.getElementById("volume")
const massEl = document.getElementById("mass")

convertBtn.addEventListener("click", function(){
    if (inputEl.value > 999) {
        alert("Please enter a number less than 999")
    } else {
        length()
        volume()
        mass()
    }
})

function length(){
    let feet = inputEl.value * 3.281
    let meters = inputEl.value / 3.281
    lengthEl.textContent =  `${inputEl.value} meters = ${feet.toFixed(3)} feet | ${inputEl.value} feet = ${meters.toFixed(3)} meters`
}

function volume(){
    let gallons = inputEl.value * 0.264
    let litres = inputEl.value / 0.264
   volumeEl.textContent =  `${inputEl.value} litres = ${gallons.toFixed(3)} gallons | ${inputEl.value} gallons = ${litres.toFixed(3)} litres`
}

function mass(){
    let pounds = inputEl.value * 2.204
    let kilos = inputEl.value / 2.204
    massEl.textContent =  `${inputEl.value} kilos = ${pounds.toFixed(3)} pounds | ${inputEl.value} pounds = ${kilos.toFixed(3)} kilos`
}