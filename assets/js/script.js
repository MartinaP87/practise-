let dictionary = [
  ["lots", "1"],
  ["of", "2"],
  ["words", "3"],
  ["from", "4"],
  ["vocabulary", "5"],
  ["picked", "6"],
  ["by", "7"],
  ["me", "8"]
]

/**
 * The first game function, called when the script is first loaded
 * and after the user's answer has been processed
 */
function pickWord() {
  let ind1 = Math.floor(Math.random() * dictionary.length);
  return dictionary[ind1];
};
let pickedWord = pickWord()[0];
let pickedWordMeaning = pickWord()[1];

pickWord();

console.log(pickedWord);
console.log(pickedWordMeaning);

/**
 * Create divs in base of the number of letters with their respective letters in them.
 */
let boxes = '';
for (let i = 0; i < pickedWord.length; i++) {
  boxes += `
     <div class="container">
     <h2>${pickedWord[i]}</h2>
     </div>
     `;
}
console.log(boxes);
document.getElementById("game-area").innerHTML = boxes;

/**
 * This function shows the letter in its position if correct 
 * and call change the function incrementWrongAnswer if wrong
 */
let letters = document.getElementsByTagName("h2");
let letterContainer = document.getElementsByClassName("container");
let doomed = document.getElementById("theman");
let messageBox = document.getElementById("final-message");

document.body.addEventListener("keypress", keyPressed);

function keyPressed(event) {
  if (pickedWord.includes(event.key)) {
    console.log("true");
    for (i = 0; i < pickedWord.length; i++) {
      if (event.key === pickedWord[i] && messageBox.style.backgroundColor !== "aqua") {
        letters[i].style.visibility = "visible";
        letterContainer[i].style.backgroundColor = "yellow"
        console.log("primo loop lettere visibili");
      } else if (messageBox.style.backgroundColor === "aqua") {
       break;
      }
    };
    victory();
  } else {
    incrementWrongAnswer();
  };

  if (messageBox.style.backgroundColor === "aqua") {
    document.body.removeEventListener("keypress", keyPressed);
    console.log("bastaaaa");

  }
};


// This function change the image every time the answer is wrong 
var n = 0;

function incrementWrongAnswer() {

  if (n < 6) {
    n++;
    doomed.style.backgroundImage = `url(assets/images/img${n}.png)`;
  }
  if (n === 6) {

    console.log("wrong");
    messageBox.style.backgroundColor = "aqua";
    messageBox.innerHTML = `
        <h3>Oh nooo!</h3>
        <h3>You haven't found the word this time... but, if you learn from a loss you have not lost!</h3>
        <h3>The word was:</h3>
        <h4><strong>${pickedWord}</strong>: <em>${pickedWordMeaning}</em></h4>
        `;
  }
};

// Define when the user wins 

function victory() {
  let results = [];
  for (i = 0; i < letters.length; i++) {
    if (letterContainer[i].style.backgroundColor === "yellow") {
      results.push("true")
    } else {
      results.push("false")
    }
    console.log(results);
    

    if (results.length === letters.length && results[i] === "true") {
      console.log("ok");
      doomed.style.backgroundImage = "url(assets/images/imgvic.png)";
      messageBox.style.backgroundColor = "aqua";
      messageBox.innerHTML = `
        <h3>Congratulations! You found the word!</h3>
        <h4><strong>${pickedWord}</strong>: <em>${pickedWordMeaning}</em></h4>
        `;
    }
  }
};