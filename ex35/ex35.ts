//Question 35: animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. %E2%80%A2 Modify your program to print a statement about each animal, such as A dog would make a great pet. %E2%80%A2 Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
let animals = ["Cow" , "Goat", "Camel"];
animals.forEach( animal => {
    console.log(`A ${animal} is a Halaal animal `);
    
});