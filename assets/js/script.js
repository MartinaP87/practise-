
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
let pickedWord = pickWord();
pickWord();

/**
 * create divs in base of the number of letters of the picked word 
 */
let boxes = '';
    for (let i = 0; i < pickedWord.length; i++) {
        boxes += `
        <div class="letters">
        ${pickedWord[i]}
        </div>
        `;
    }
    console.log(boxes);
document.getElementById("game-area").innerHTML = boxes;
   

for (let i = 0; i < pickedWord.length; i++) 
document.getElementsByClassName("letters").innerText = 

body.addEventListener("onkeyup", show);

function show(event) 
  // for (i = 0; i < pickedWord.length; i++) 
   // if (event.key === pickedWord[i])  

    

function runGame() 
function incrementScore() 
function incrementWrongAnswer()
