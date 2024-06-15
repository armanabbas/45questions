//Question 32: Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
let users: string[] = ["Ahmed", "Qasim", "Danish", "Sohail", "Arman"];
let newUsers: string[] = ["Ahmed", "Aqib", "Wajid", "Qasim", "Abid" , "Noman"];

newUsers.forEach((newUser) => {
  if (users.some((user) => user.toLowerCase() === newUser.toLowerCase())) {
    console.log(`${newUser} will need to enter a new username.`);
  } else if (
    newUsers.filter((user) => user.toLowerCase() === newUser.toLowerCase())
      .length > 1
  ) {
    console.log(`${newUser} is a duplicate username in the new users list.`);
  } else {
    console.log(`${newUser} is available.`);
  }
});
