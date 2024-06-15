//Question 36: t-shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
function tShirts(color: string, size: string, text: string) {
  console.log(
    `making a t-shirt ${color} shirt, size ${size}, this text print on shirt (${text})`
  );
}
tShirts("RED", "meduim", "There's no place like 127.0.0.1");
