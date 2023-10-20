
const rowj = document.querySelector(".row"); 
let rowgrid = "";

// ciclo di for: 
// for (let i = 1; i <= 100; i ++) {
//     let result = ""; 
//     console.log (i);
//     if (i % 15 === 0) {
//         result = "FizzBuzz";
//         console.log (result);
//     }else if (i % 3 === 0 ) {
//         result = "Fizz";
//         console.log (result);
//     }else if (i % 5 === 0 ) {
//         result = "Buzz";
//         console.log (result);
//     }else {
//         result = "NoDefault"
//         console.log (result);
//     }
//     rowgrid += `<div class="box ${result}">${result}</div>`;
    
    
// }

// rowj.innerHTML = rowgrid; ---> questo codice fa vedere correttamente Fizz, Buzz, Fizzbuzz ma non Nodefault;



// for (let i = 1; i <= 100; i++) {
//     let result = i;

//     if (i % 15 === 0) {
//         result = "FizzBuzz";
//     } else if (i % 3 === 0) {
//         result = "Fizz";
//     } else if (i % 5 === 0) {
//         result = "Buzz";
//     }

//     rowgrid += `<div class="box ${result === i ? "Nodefault" : ""}">${result}</div>`;
// }

// rowj.innerHTML = rowgrid; ----> questo codice fa vedere correttamente Nodefault ma non Fizz, Buzz e FizzBuzz



for (let i = 1; i <= 100; i++) {
    let result = i;

    if (i % 15 === 0) {
        result = "FizzBuzz";
    } else if (i % 3 === 0) {
        result = "Fizz";
    } else if (i % 5 === 0) {
        result = "Buzz";
    }

    
    let boxClass;

    if (result === "Fizz") {
        boxClass = "Fizz";
    } else if (result === "Buzz") {
        boxClass = "Buzz";
    } else if (result === "FizzBuzz") {
        boxClass = "FizzBuzz";
    } else {
        boxClass = "Nodefault";
    }

    rowgrid += `<div class="box ${boxClass}">${result}</div>`;
}

rowj.innerHTML = rowgrid;
