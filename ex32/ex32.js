// import inquirer from "inquirer";
// const promptUserName = async () => {
//   const { userName } = await inquirer.prompt([
//     {
//       name: "userName",
//       type: "input",
//       message: "Enter your name with upper, lower, and mixed case:",
//     },
//   ]);
//   return userName;
// };
// const checkUserNameAvailability = (userName:any) => {
//   // This function should check if the username is unique.
//   // For now, let's assume it always returns true.
//   return true;
// };
// const main = async () => {
//   let userName;
//   let isUnique = false;
//   while (!isUnique) {
//     userName = await promptUserName();
//     // Check if the username is unique
//     isUnique = checkUserNameAvailability(userName);
//     if (!isUnique) {
//       console.log("Oops! This username already exists. Please enter a unique name.");
//     }
//   }
//   console.log(`Welcome, ${userName}!`);
// };
// main();
// let users: string[] = ["user1", "admin", "user3", "user4", "user5"];
// let newUsers: string[] = ["User1", "User6", "user7", "admin", "User9"];
// newUsers.forEach(newUser => {
//     if (users.some(user => user.toLowerCase() === user.toLowerCase())) {
//         console.log(`${newUser} will need to enter a new username.`);
//     } else {
//         console.log(`${newUser} is available.`);
//     }
// });
let users = ["Ahmed", "Qasim", "Danish", "Sohail", "Arman"];
let newUsers = ["Ahmed", "Aqib", "Wajid", "Qasim", "Abid", "Noman"];
newUsers.forEach((newUser) => {
    if (users.some((user) => user.toLowerCase() === newUser.toLowerCase())) {
        console.log(`${newUser} will need to enter a new username.`);
    }
    else if (newUsers.filter((user) => user.toLowerCase() === newUser.toLowerCase())
        .length > 1) {
        console.log(`${newUser} is a duplicate username in the new users list.`);
    }
    else {
        console.log(`${newUser} is available.`);
    }
});
export {};
