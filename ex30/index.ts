// Question 30: Hello Admin: Greet users differently, especially 'admin'.

let usersName: string[] = ["Admin", "user1", "user2"];

usersName.forEach(userName => {
  if (userName === "Admin") {
    console.log("Hello admin, would you like to see a status report?");
  } else {
    console.log(`Hello ${userName}, thank you for logging in again.`);
  }
});
