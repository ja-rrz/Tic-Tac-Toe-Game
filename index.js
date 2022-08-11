
let lastValue = "O";
let display = document.getElementById('display')
display.textContent = "Player 1's turn to play"

let boxes = document.querySelectorAll(".input")

for (let input of boxes) {
    input.addEventListener("click", () => {
        if (input.textContent !== "") {
            return;
        }

        if (lastValue === "O"){
            input.textContent = "X";
            lastValue = "X";
            display.textContent = "Player 2's turn to play";
            checkGameStatus();
            checkDraw();
        }

        else{
            input.textContent = "O";
            lastValue = "O";
            display.textContent = "Player 1's turn to play";
            checkGameStatus();
            checkDraw();
        }
    })
}

let controlBtn = document.getElementById("controlBtn")
controlBtn.addEventListener("click", () => {
    window.location.href = "index.html"
})

function checker(first, second, third) {
    if (
        boxes[first].textContent === "X" &&
        boxes[second].textContent === "X" &&
        boxes[third].textContent === "X" 
    ) {
        disableButtonsWhenGameIsWon("Player 1")
    } else if (
        boxes[first].textContent === "O" &&
        boxes[second].textContent === "O" &&
        boxes[third].textContent === "O" 
    ) {
        disableButtonsWhenGameIsWon("Player 2")
    }
}

function checkGameStatus() {
    checker(0, 1, 2)
    checker(3, 4, 5)
    checker(6, 7, 8)
    checker(0, 3, 6)
    checker(1, 4, 7)
    checker(2, 5, 8)
    checker(0, 4, 8)
    checker(2, 4, 6)
}

function disableButtonsWhenGameIsWon(player) {
    for (let input of boxes) {
        if (boxes.textContent === "") {
              input.addEventListener("click", ()=>{})
        }
    }
    display.textContent = player + " Won the game"
}

function checkDraw() {
    for (let input of boxes) {
        if (input.textContent === "") {
            return
        }
    }
    display.textContent = "It's a Tie"
}