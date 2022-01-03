// fet to mile conversion with javascript


function feetToMile(feet) {
    if (feet < 0) {
        return "distance cannot be negative"
    } else {
        return mile = feet / 5280;   
    }
}

let converted = feetToMile(150000);
console.log(converted);

//simple odd even conversion with javascript
function oddEven(num) {
    if (num % 2 === 0) {
        return "The number is even " + num;
    } else {
        return "The number is odd " + num;
    }
}
let even = oddEven(19);
console.log(even)
