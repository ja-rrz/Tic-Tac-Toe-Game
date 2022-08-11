
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