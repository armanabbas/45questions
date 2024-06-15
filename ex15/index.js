"use strict";
// Question 15: Changing Guest List: One of your guests can't make it to the dinner, so you need to send out a new set of invitations with a replacement guest.
let guestList = ["Saqib", "Aqib", "Arman", "Babar"];
guestList.pop();
guestList.push("Arsalan");
for (let i = 0; i < guestList.length; i++) {
    console.log(`Assalam o Alaikum ${guestList[i]} I wanna be invite you for dinner can you join me?`);
}
