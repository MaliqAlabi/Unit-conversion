const numberInput = document.getElementById("numberInput")
const convertBtn = document.getElementById("convertBtn")
const firstText = document.getElementById("firstText")
const secondText = document.getElementById("secondText")
const thirdText = document.getElementById("thirdText")


convertBtn.addEventListener("click",function(){
    length("meters","feet")
    volume("litres", "gallons")
    mass("kilograms", "pounds")
})

function length(unit1,unit2){
    let result1 = numberInput.value * 3.281
    result1 = result1.toFixed(3)
    let result2 = numberInput.value * 0.304785126
    result2 = result2.toFixed(3)

    firstText.textContent = 
    `
        ${numberInput.value} ${unit1} = ${result1} ${unit2}
        | ${numberInput.value} ${unit2} = ${result2} ${unit1}
    `
}

function volume(unit1,unit2){
    let result1 = numberInput.value * 0.264
    result1 = result1.toFixed(3)
    let result2 = numberInput.value * 3.787878788
    result2 = result2.toFixed(3)
    secondText.textContent = 
    `
        ${numberInput.value} ${unit1} = ${result1} ${unit2}
        | ${numberInput.value} ${unit2} = ${result2} ${unit1}
    `
}

function mass(unit1,unit2){
    let result1 = numberInput.value * 2.204
    result1 = result1.toFixed(3)
    let result2 = numberInput.value * 0.453720508
    result2 = result2.toFixed(3)
    thirdText.textContent = 
    `
        ${numberInput.value} ${unit1} = ${result1} ${unit2}
        | ${numberInput.value} ${unit2} = ${result2} ${unit1}
    `
}