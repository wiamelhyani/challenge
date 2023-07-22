const words = [
    "Hello",
    "Tanger",
    "Marrakech",
    "Paris",
    "Clermont",
    "Marsielle",
    "Agadir",
    "Casablanca",
    "Lille",
    "Strasbourg",
    "Bordeaux",
    "Rabat",
    "Essaouira",
    "Chefchaouen",
    "Montpellier",
    "Toulouse",
    "Nantes",
    "Mohammedia",
    "Merzouga"
];

const lvls = {
    "Easy": 5,
    "Normal": 3,
    "Hard": 2
};

let defaultLevelName = "Normal";
let defaulLevelSecond = lvls[defaultLevelName];

let startButton = document.querySelector(".start");
let theWord = document.querySelector(".the-word");
let lvlMessage = document.querySelector(".message .lvl");
let secondMessage = document.querySelector(".message .seconds");
let upcomingWords = document.querySelector(".upcoming-words");
let input = document.querySelector(".input");
let finishMessage = document.querySelector(".finish");
let theLeftSpan = document.querySelector(".time span");
let scoreGot = document.querySelector(".score .got");
let scoreTotal = document.querySelector(".score .total");

lvlMessage.innerHTML = defaultLevelName;
secondMessage.innerHTML = defaulLevelSecond;
theLeftSpan.innerHTML = defaulLevelSecond;
scoreTotal.innerHTML = words.length;

input.onpaste = function(){
    return false;
}

startButton.onclick = function () {
    this.remove();
    input.focus();
    getwords();
}
function getwords() {
    let rendomwords = words[Math.floor(Math.random() * words.length)];
    let wordIndex = words.indexOf(rendomwords);
    theWord.innerHTML = rendomwords;
    words.splice(wordIndex, 1);
    upcomingWords.innerHTML = '';
    for (let i = 0; i < words.length; i++){
        let div = document.createElement("div");
        let txt = document.createTextNode(words[i]);
        div.appendChild(txt);
        upcomingWords.appendChild(div);
    }
    startPlay();
}

function startPlay() {
    theLeftSpan.innerHTML = defaulLevelSecond;
    let start = setInterval(() => {
        theLeftSpan.innerHTML--;
        if (theLeftSpan.innerHTML === "0") {
            clearInterval(start) ;
            if (theWord.innerHTML.toLowerCase() === input.value.toLowerCase()) {
                input.value = '';
                scoreGot.innerHTML++;
                
                if (words.length > 0) {
                    getwords();
                    
                }
            } 
            else {
                let span = document.createElement("span");
                span.className = 'bad';
                let spanText = document.createTextNode("Game Over");
                span.appendChild(spanText);
                finishMessage.appendChild(span);
            }
        }
    }, 1000);
}
