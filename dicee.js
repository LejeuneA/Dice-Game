function selectRandom() {
    return randomDiceNum = Math.floor(Math.random() * 6) + 1;
}

function selectImage(randomDiceNum) {
    return "../../DOM/Dicee+Challenge+-+Starting+Files/images/dice" + randomDiceNum + ".png";
}
    
let player1 = selectRandom();
let player2 = selectRandom();

document.querySelector(".dice .img1").setAttribute("src", selectImage(player1));
document.querySelector(".dice .img2").setAttribute("src", selectImage(player2));

function diceWinner() {

    if (player1 > player2) {
        document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
    } else if (player1 < player2) {
        document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
    } else {
        document.querySelector("h1").innerHTML = "Draw!";
    }
}


diceWinner();