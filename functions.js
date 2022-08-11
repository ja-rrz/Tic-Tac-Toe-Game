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