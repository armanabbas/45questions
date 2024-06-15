// Question 16: More Guests: You've found a bigger dinner table, so there's room for more guests.

let guestList = ["Saqib" , "Aqib" , "Arman" , "Babar"];
guestList.pop();
guestList.push("Arsalan"); 
for(let i=0; i<guestList.length; i++) {
    console.log(`Assalam o Alaikum ${guestList[i]} I wanna be invite you for dinner can you join me?`);
} 
guestList.push("Junaid" , "Qasim" , "Azan" , "Annus" , "Rehman" , "Qadeer")
for(let i = 0; i<guestList.length; i++) {
console.log(`Hey I have more space for  more big party so i would like to invite ${guestList[i]}` );
}