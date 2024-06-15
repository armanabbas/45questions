// Question 3: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let personName = "AHMED ali";
let upperCase = personName.toUpperCase();
console.log(personName);
console.log(upperCase , "in uppercase!");

let lowerCase = personName.toLowerCase();
console.log(lowerCase , "in lowercase!");

function toTitleCase(str) {
    return str.toLowerCase().split(' ').map(function(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
}

// Example usage:
let inputString = "ahmed ali";
let titleCaseString = toTitleCase(inputString);
console.log(titleCaseString , "in titlecase!"); 