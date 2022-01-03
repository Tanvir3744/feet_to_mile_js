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

// find vowel or consonent from and array

function is_vowel(vowel) {
    vowel = vowel.toLowerCase();
    if (vowel === "a" || vowel === "e" || vowel === "i" || vowel === "o" || vowel === "u" ) {
        return "Vowel " +"value == "+ vowel;
    } else {
        return "consonent " + " value == "+  vowel;
    }
}
let check = is_vowel('c');
console.log(check);