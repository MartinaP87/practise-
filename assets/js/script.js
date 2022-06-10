


let dictionary = [["lots", "1"], ["of", "2"], ["words", "3"], ["from", "4"], 
["vocabulary", "5"], ["picked", "6"], ["by", "7"], ["me", "8"]]
/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */
function pickWord () {
    let ind1 = Math.floor(Math.random() * 7) ;
    return dictionary[ind1][0]
}
let pickedWord = pickWord()
pickWord()
document.getElementById("game-area").innerText = "<p>bo</p>";
/**
 * function to hide the letters of the picked world and
 * display the letter when guessed right
 */
function hide() {
   
        // document.getElementById(sub-game-area).innerText = "_ ";
       let boxes = document.createElement("div");
       boxes.className = "letters";

       document.getElementById("game-area").appendChild(boxes);
    }
    hide()

for (let i = 0; i < pickedWord.length; i++) 
document.getElementsByClassName("letters").innerText = 

let playground = document.getElementsByTagName("body")
playground.addEventListener("onkeyup", show)
function show(event){
    for (i = 0; i < pickedWord.length; i++) {
    if (event.key === pickedWord[i]) {

    }
 } else {

    }
}

function runGame() 
function incrementScore() 
function incrementWrongAnswer() {

}
