
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
     <div class="letters ${i}">
     ${pickedWord[i]}
     </div>
     `;
   
 }
 console.log(boxes);
document.getElementById("game-area").innerHTML = boxes;




//for (let i = 0; i < pickedWord.length; i++) 
//document.getElementsByClassName("letters").innerText = 

////body.addEventListener("onkeyup", show);

function show(event) 
  // for (i = 0; i < pickedWord.length; i++) 
   // if (event.key === pickedWord[i])  

    

function runGame() 
function incrementScore() 
function incrementWrongAnswer()

// Create an empty array: 

let numbers = []; 

  

// Put 1000 random numbers in it, between 0 and 1000 (exclusive of 1000, and duplicates are fine...it's random) 

let i = 0; 

while (i < 1000) { 

    numbers.push(Math.floor(Math.random() * 1000)); 

    i++; 

}; 

  

// create a table element. Give it an ID so we can identify it 

let table = document.createElement('table'); 

table.id = 'random-numbers'; 

  

// Create some basic HTML markup for the table structure: 

let tableHtml = ` 

<thead> 

    <tr> 

        <td>Item #</td> 

        <td>Value</td> 

    </tr> 

</thead> 

<tbody> 

</tbody> 

`; 

  

// Set the table's inner html 

table.innerHTML= tableHtml; 

  

// Now it's an HTMLElement object, we can get its body! 

let tbody = table.getElementsByTagName('tbody')[0]; 

  

// Iterate the array and append a row to the table body's html for each number. This is using template literals again 

let tbodyHtml = ''; 

for (let i = 0; i < numbers.length; i++) { 

    tbodyHtml += ` 

        <tr> 

            <td>${i}</td> 

            <td>${numbers[i]}</td> 

        </tr> 

    ` 

} 

  

// With iteration complete, we now have a long string of HTML w/ all the rows for the table body...just set it! 

tbody.innerHTML = tbodyHtml; 

  

// Append the whole table to the document's body...voila! 1000 rows! 

document.body.appendChild(table); 