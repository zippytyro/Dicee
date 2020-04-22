// selectors
var btn = document.getElementsByTagName("button");
var image1 = document.getElementById("img1");
var image2 = document.getElementById("img2");
var heading = document.querySelector("h1");

function winnerLoser() {
    // random number for player 1
    var random1 = Math.random();
    random1 = random1 * 6; // will generate numbers from 0 to 5.9999999999999999
    random1 = Math.floor(random1) + 1; // this wil make the 0 to 1 and 5.9 to 6 hence, getting the required range of numbers.
    // random number for player 2
    var random2 = Math.random();
    random2 = random2 * 6;
    random2 = Math.floor(random2) + 1;

    image1.setAttribute("src", "images/" + random1 + ".png");
    image2.setAttribute("src", "images/" + random2 + ".png");
    // displaying who won the game. 
    if (random1 == random2) {
        heading.textContent = "Draw Man!";
    } else if (random1 > random2) {
        heading.textContent = "Player 1 wins!"
    } else {
        heading.textContent = "Player 2 wins!";
    }
}
btn.addEventListner("click", winnerLoser);