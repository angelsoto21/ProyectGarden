let valor1 = document.getElementById('input1');
let valor2 = document.getElementById('input2');
const form = document.querySelector("#form"); 
let btn2 = document.getElementById('btnCalcular');
let res = document.querySelector('.res');

form.addEventListener('submit', sumarInput);

function btnOnClick(){
    res.innerHTML = 'resultado: ' + (parseInt(valor1.value) + parseInt(valor2.value));
}

