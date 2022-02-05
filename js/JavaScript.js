// 1
// setTimeout(wakeUpUser, 5000);
// function wakeUpUser() {
//     alert("Are you going to stare at this boring page forever?");
// }

// 2

// var i = 0;
// var name = "Joe";
// while (i < 2) {
//     document.write("Happy Birthday to you.</br>");
// i = i + 1;
// }
// document.write("Happy Birthday dear " + name + ",</br>");
// document.write("Happy Birthday to you.</br>");

// 3

// var word = "bottles";
// var count = 99;
// while (count > 0) {
//     console.log(count + " " + word + " " + " of beer on the wall");
//     console.log(count + " " + word + " " + " of beer,");
//     console.log("Takes one down, pass it around,");
//     count = count - 1;
//     if (count > 0) {
//         console.log(count + " " + word + " " + " of beer on the wall");
//     } else {
//         console.log("No more " + word + " of beer on the wall");
//     }
// }

// 4 Морской бой

var location1 = 3;  // переменная для хранения позиции
var location2 = 4;  // переменная для хранения позиции
var location3 = 5;  // переменная для хранения позиции

var guess;          // переменная для номера текущей попытки
var hits = 0;       // переменная для количества попаданий
var guesses = 0;    // переменная для количества попыток
var isSunk = false; // переменная для хранения информации - потоплен корабль или нет 

while (isSunk == false) {
    guess = prompt("Ready, aim, fire! (enter a number 0-6):");
    if (guess < 0 || guess > 6) {
        alert("Please enter a valid cell number")
    } else {
        guesses = guesses + 1;

        if (guess == location1 || guess == location2 || guess == location3) {
            hits = hits + 1;
        }
    }
}