const firstInput = document.getElementById('first-input');
const secondInput = document.getElementById('second-input');
let res = document.getElementById('resultado')



document.addEventListener('keydown',(e) => {
    if (e.key === 'Enter') {
    compasso(parseFloat(firstInput.value), parseFloat(secondInput.value))
    }
})


function compasso(firstInput, secondInput) {
    res.innerHTML = ''
    let div = firstInput / secondInput
    res.innerHTML = `o resultado da divisão: ${div} <br>`
    for(let i = 1; i <= secondInput; i++) {
        res.innerHTML += ` ${(div * i).toFixed(1)} -`
        console.log((div * i).toFixed(2))
    }


}