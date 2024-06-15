//Question 37: Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function shirts(
  size: string = "Large",
  color: string = "White",
  text: string = "'Hello world!'"
) {
  console.log(
    `making shirt size ${size}, color ${color}, print text on shirt ${text}`
  );
}
shirts();
