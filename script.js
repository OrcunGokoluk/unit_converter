/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const lengthText=document.getElementById("length")
const volumeText=document.getElementById("volume")
const massText=document.getElementById("mass")

const convertBtn=document.getElementById("convert-btn")

const input=document.getElementById("input");

convertBtn.addEventListener("click", function()
{   
    ltxt=Number(input.value);
    lengthText.textContent=`${ltxt} meters = ${(ltxt*3.2808399).toFixed(2)} feet | ${ltxt} feet ${(ltxt*0.3048).toFixed(2)} meters`

    vtxt=Number(input.value);
    volumeText.textContent=`${vtxt} liter = ${(vtxt*0.264172052).toFixed(2)} gallon | ${vtxt} gallon ${(vtxt*3.78541178).toFixed(2)} liter`

    mtxt=Number(input.value);
    massText.textContent=`${mtxt} kilogram = ${(mtxt*2.20462262).toFixed(2)} pound | ${mtxt} pound ${(mtxt*0.45359237).toFixed(2)} kilogram`
})