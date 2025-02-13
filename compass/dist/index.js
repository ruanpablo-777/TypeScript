"use strict";
const firstInput = document.getElementById('first-input');
const secondInput = document.getElementById('second-input');
const res = document.getElementById('resultado');
if (!firstInput || !secondInput || !res) {
    throw new Error("um ou mais elementos do DOM não foram encontrados");
}
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const num1 = parseFloat(firstInput.value || "0");
        const num2 = parseFloat(secondInput.value || "0");
        if (isNaN(num1) || isNaN(num2) || num2 === 0) {
            res.innerHTML = "insira numeros validos e um divisor maior que zero!";
            return;
        }
        compasso(num1, num2);
    }
});
function compasso(firstInputValue, secondInputValue) {
    if (!res)
        return;
    res.innerHTML = '';
    let div = firstInputValue / secondInputValue;
    res.innerHTML = `o resultado da divisão: ${div} <br>`;
    for (let i = 1; i <= secondInputValue; i++) {
        res.innerHTML += ` ${(div * i).toFixed(1)} - `;
    }
}
