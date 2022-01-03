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
