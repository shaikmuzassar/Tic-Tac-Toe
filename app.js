let boxes  = document.querySelectorAll(".box");
let rstBtn = document.querySelector("#rst-btn");
let newBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn = true;

const arr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]

];

const restGame = () => {
    turn = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener('click', () =>{
        console.log("Box was clicked")
        if (turn) {
            box.innerText = "X";
            turn = false;
            box.style.color = "blue";
        } else {
            box.innerText = "O";
            turn = true;
            box.style.color = "orange";
        }

        box.disabled = true;

        checkWinner();
    })
})

const disableBoxes = () => {
    for ( let box of boxes) {
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for ( let box of boxes) {
        box.disabled = false;
        box.innerText = "";
        box.style.backgroundColor = "aliceblue";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();

}

const checkWinner = () => {
    for ( let pattern of arr) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if ( pos1Val != "" && pos2Val !== "" & pos3Val != "" ) {
            if ( pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("Winner =", pos1Val);
                showWinner(pos1Val);
                boxes[pattern[0]].style.backgroundColor = "lightgreen";
                boxes[pattern[1]].style.backgroundColor = "lightgreen";
                boxes[pattern[2]].style.backgroundColor = "lightgreen";
            }
        }
    }
}

newBtn.addEventListener('click', restGame);
rstBtn.addEventListener('click', restGame);