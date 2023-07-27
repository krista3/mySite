const inputA = document.getElementById("inputA");
const inputB = document.getElementById("inputB");
let result = document.getElementById("result");


function addition(){
    const A = parseFloat(inputA.value);
    const B = parseFloat(inputB.value);

    let answer = A + B;
    console.log(answer);
    result.innerHTML = `${answer}`;
}
function subtraction(){
    const A = parseFloat(inputA.value);
    const B = parseFloat(inputB.value);
    let answer = A - B;
    console.log(answer);
    result.innerHTML = `${answer}`;
}
function multiplication() {  
    const A = parseFloat(inputA.value);
    const B = parseFloat(inputB.value);
    let answer = A * B;
    console.log(answer);
    result.innerHTML = `${answer}`;
}
function division() {
    const A = parseFloat(inputA.value);
    const B = parseFloat(inputB.value);
    let answer = A / B;
    console.log(answer);
    result.innerHTML = `${answer}`;
}
