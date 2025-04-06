let boxes = document.querySelectorAll(".button");
let reset = document.querySelector(".reset");
let newgame = document.querySelector(".newgame");
let msgcontain = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");
let draw_cond = document.querySelector(".draw");
let nextgame = document.querySelector(".nextgame");

var count = 0;

let TurnX = true;
const winSequence = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];



boxes.forEach((box) => {
    box.addEventListener("click", () => {

        if (TurnX) {
            box.innerHTML = "X";
            box.style.color = "red";
            TurnX = false;
        } else {
            box.innerHTML = "O";
            box.style.color = "blue";
            TurnX = true;
        }
        box.disabled = true;
        count += 1;

        CheckWinner();

        if (count === 9) {
            draw_cond.classList.remove("draw");
        }
    });
});

reset.addEventListener("click", () => {
    TurnX = true;
    enableboxes();
    msgcontain.classList.add("hide");
    draw_cond.classList.add("draw");
    count = 0;
});

const disableboxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enableboxes = () => {
    for ( let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }

}

const ShowWinner = (winner) => {
    disableboxes();
    msg.innerHTML = `congratulations, winner is ${winner}`;
    msgcontain.classList.remove("hide");
    count = 0;
}

const CheckWinner = () => {
    for (let pattern of winSequence) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                ShowWinner(pos1);
            }
        }
    }
};

newgame.addEventListener("click", () => {
    TurnX = true;
    enableboxes();
    msgcontain.classList.add("hide");
    draw_cond.classList.add("draw");
    count = 0;
});
