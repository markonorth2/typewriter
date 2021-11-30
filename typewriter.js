
// Displaying each character in the "sentence" with a delay

const sentence = "Taiwan is the best. Canada is the best!";

let delay = 0;
let increment = 50;
for (let i=0; i < sentence.length; i++) {
  setTimeout(() => {
    process.stdout.write(sentence[i])
  }, delay);
  delay += increment;
  
}

//Practing nested setTimeout, but failed
  // const sentence = "Taiwan is the best. Canada is the best!";

  // let delay = 0;
  // let increment = 400;
  // for (let i=0; i < sentence.length; i++) {
  //   setTimeout(() => {
  //     process.stdout.write(sentence[i])
  //     setTimeout(() => {process.stdout.write("john!")
  //     }, 10000)
  //   }, delay);
  //   delay += increment;
    
  // }

console.log("Hi")