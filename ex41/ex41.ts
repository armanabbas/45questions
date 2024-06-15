//Question 41: magicians: Make a array of magician%E2%80%99s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
let megicians: string[] = [
  "Harry Houdini",
  "David Copperfield",
  "David Blaine",
  "Uri Geller",
];
let func = (megicians: string[]) => {
  megicians.forEach((megicians) => {
    console.log(megicians);
  });
};
func(megicians);
