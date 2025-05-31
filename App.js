let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-button");
let newGamebtn = document.querySelector("#new-button");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

const winPatterns =[
    [0,1,2],
    [0,3,4],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box) => {
    box.addEventListener("click", ()=> {
        console.log("box was clicked");
        if(turnO){
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

const disableBoxes = () => {     // ek baar winner declare hone k baad aur boxes fill na kr paye!
    for(let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => {     
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () => {
    for( let pattern of winPatterns){
        let Pos1Val = boxes[pattern[0]].innerText;
        let Pos2Val = boxes[pattern[1]].innerText;
        let Pos3Val = boxes[pattern[2]].innerText;

        if(Pos1Val != "" && Pos2Val != "" && Pos3Val != ""){
            if(Pos1Val == Pos2Val  && Pos2Val == Pos3Val){
                showWinner(Pos1Val);
                return true;
            }
        }
    }
}

newGamebtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
