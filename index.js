const convertBtn = document.getElementById("convert-units-btn")
const lengthEl = document.getElementById("lengthEl")
const volumeEl = document.getElementById("volumeEl")
const massEl = document.getElementById("massEl")
const conversionInput = document.getElementById("conversion-input")
let input = 20
const regex = /^[0-9]*$/
const alert = document.getElementById("alert")

conversionInput.addEventListener("input", function(){
    input = conversionInput.value 
})

convertBtn.addEventListener("click", function(){
    
    if(regex.test(conversionInput.value) != true) {
        alert.textContent = "Please enter numbers only"
    }

    else if(conversionInput.value == 1){
        alert.textContent = ""
    lengthEl.textContent= `${input} meter = ${(input * 3.281).toFixed(2)} feet | ${input} foot = ${(input / 3.281).toFixed(2)} meters`
    volumeEl.textContent = `${input} liter = ${(input / 3.785).toFixed(2)} gallons | ${input} gallon = ${(input * 3.785).toFixed(2)} liters`
    massEl.textContent = `${input} kilo = ${(input * 2.205).toFixed(2)} pounds | ${input} pound = ${(input /2.205).toFixed(2)} kilos`
    }
   
    else if(conversionInput.value){
    alert.textContent = ""
    lengthEl.textContent= `${input} meters = ${(input * 3.281).toFixed(2)} feet | ${input} feet = ${(input / 3.281).toFixed(2)} meters`
    volumeEl.textContent = `${input} liters = ${(input / 3.785).toFixed(2)} gallons | ${input} gallons = ${(input * 3.785).toFixed(2)} liters`
    massEl.textContent = `${input} kilos = ${(input * 2.205).toFixed(2)} pounds | ${input} pounds = ${(input /2.205).toFixed(2)} kilos`
    }
})

 