//all three buttons 
let player1Btn = document.querySelector("#player1Button");
let player2Btn = document.querySelector("#player2Button");
let resetBtn = document.querySelector("#resetButton");

//select
let selectBtn = document.querySelector("#playingTo");

//score headings for both players
let score1 = document.querySelector("#score1");
let score2 = document.querySelector("#score2");

let score1Value = 0;
let score2Value = 0;

//result score heading
let result = document.querySelector("#result");

let flag = 0;

//player1Btn click event
player1Btn.addEventListener("click", () => {
    let maxScore = selectBtn.value;
    if (score1Value < maxScore) {
        score1Value++;
        score1.textContent = score1Value;
        if (score1Value == maxScore) {
            change();
            flag++;

        }
    }



})

//player2Btn click event
player2Btn.addEventListener("click", () => {
    let maxScore = selectBtn.value;
    if (score2Value < maxScore) {
        score2Value++;

        score2.textContent = score2Value;
        if (score2Value == maxScore) {
            change();
            flag++;
        }

    }


})

//reset button event listener
resetBtn.addEventListener("click", () => {
    if (flag) {
        change();
    }

    score1Value = 0;
    score2Value = 0;
    score1.textContent = score1Value;
    score2.textContent = score2Value;
    flag = 0;
})





function change() {
    const btnList = document.querySelectorAll(".playerBtn");   //make player buttons disabled

    for (let btn of btnList) {
        if (!btn.disabled) {
            btn.disabled = true;
        }
        else {
            btn.disabled = false;
        }

        btn.classList.toggle("disable");
        if (btn.id == player1Btn.id) {
            btn.classList.toggle("hover:bg-teal-600");
        }
        else {
            btn.classList.toggle("hover:bg-blue-700");
        }
    }

    resetBtn.classList.toggle("bg-red-700", "hover:bg-red-500");
    if (score1Value > score2Value) {
        score1.classList.toggle("green");
        score2.classList.toggle("red");
        if (result.textContent === "") {
            result.textContent = "Player 1 Wins!";
        }
        else {
            result.textContent = "";
        }

    }
    else {
        score2.classList.toggle("green");
        score1.classList.toggle("red");
        if (result.textContent === "") {
            result.textContent = "Player 2 Wins!";
        }
        else {
            result.textContent = "";
        }
    }


}