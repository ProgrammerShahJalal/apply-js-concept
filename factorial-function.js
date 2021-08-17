/*let factorial = 1;
for (let i = 1; i <= 5; i++) {
    factorial = factorial * i;
}
console.log(factorial);*/

// function getFactorial(number) {
//     let factorial = 1;
//     for (i = 1; i <= number; i++) {
//         factorial = factorial * i;
//     }
//     return factorial;
// }
// var firstFactorial = getFactorial(7);
// console.log('factorial of 7 is', firstFactorial);

// var secondFactorial = getFactorial(9);
// console.log('factorial of 9 is', secondFactorial);

/*function getFactorial(number) {
    let factorial = 1;
    let i = 1;
    while (i <= number) {
        factorial = factorial * i;
        i++;
    }
    return factorial;
}
const myFactorial = getFactorial(6);
console.log(myFactorial);

const yourFactorial = getFactorial(7);
console.log(yourFactorial);*/

// decremeting loop
function getFactorial(number) {
    let factorial = 1;
    let i = number;
    while (i >= 1) {
        factorial = factorial * i;
        i--;
    }
    return factorial;
}
const yourFactorial = getFactorial(7);
console.log(yourFactorial);
