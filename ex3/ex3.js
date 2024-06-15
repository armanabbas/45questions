var personName = "AHMED ali";
var upperCase = personName.toUpperCase();
console.log(personName);
console.log(upperCase, "in uppercase!");
var lowerCase = personName.toLowerCase();
console.log(lowerCase, "in lowercase!");
function toTitleCase(str) {
    return str.toLowerCase().split(' ').map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
}
// Example usage:
var inputString = "ahmed ali";
var titleCaseString = toTitleCase(inputString);
console.log(titleCaseString, "in titlecase!");
