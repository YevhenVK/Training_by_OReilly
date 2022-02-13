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

// var location1 = 3;  // переменная для хранения позиции
// var location2 = 4;  // переменная для хранения позиции
// var location3 = 5;  // переменная для хранения позиции

// var guess;          // переменная для номера текущей попытки
// var hits = 0;       // переменная для количества попаданий
// var guesses = 0;    // переменная для количества попыток
// var isSunk = false; // переменная для хранения информации - потоплен корабль или нет 

// while (isSunk == false) {
//     guess = prompt("Ready, aim, fire! (enter a number 0-6):");
//     if (guess < 0 || guess > 6) {
//         alert("Please enter a valid cell number")
//     } else {
//         guesses = guesses + 1;

//         if (guess == location1 || guess == location2 || guess == location3) {
//             alert("HIT");
//             hits = hits + 1;
            
//             if (hits == 3) {
//                 isSunk = true;
//                 alert("You sank my battleship!");
//             } 
//         } else {
//             alert("MISS")
//         }
//     }
// }
// var stats = "You took " + guesses + " guesses to sink the battleship, " + "which means your shooting accuracy was " + (3 / guesses);
// alert(stats);

// 5 Морской бой с случайными цифрами

// var randomLoc = Math.floor(Math.random() * 5);

// var location1 = randomLoc;  // переменная для хранения позиции
// var location2 = location1 + 1;  // переменная для хранения позиции
// var location3 = location2 + 1;  // переменная для хранения позиции

// var guess;          // переменная для номера текущей попытки
// var hits = 0;       // переменная для количества попаданий
// var guesses = 0;    // переменная для количества попыток
// var isSunk = false; // переменная для хранения информации - потоплен корабль или нет 

// while (isSunk == false) {
//     guess = prompt("Ready, aim, fire! (enter a number 0-6):");
//     if (guess < 0 || guess > 6) {
//         alert("Please enter a valid cell number")
//     } else {
//         guesses = guesses + 1;

//         if (guess == location1 || guess == location2 || guess == location3) {
//             alert("HIT");
//             hits = hits + 1;
            
//             if (hits == 3) {
//                 isSunk = true;
//                 alert("You sank my battleship!");
//             } 
//         } else {
//             alert("MISS")
//         }
//     }
// }
// var stats = "You took " + guesses + " guesses to sink the battleship, " + "which means your shooting accuracy was " + (3 / guesses);
// alert(stats);

// 6 Функции (глава 3)

// function bark(name, weight) {
//     if (weight > 20) {
//         console.log(name + " says WOOF WOOF");
//     } else {
//         console.log(name + " says woof woof");
//     }  
// }
// bark("rover", 23);
// bark("spot", 13);
// bark("spike", 53);
// bark("lady", 17);

// 7 Развлечение с магнитом

// function whatShallIWear(temp) {
//     if (temp < 60) {
//         console.log("Wear a jacket");
//     } else if (temp < 70) {
//         console.log("Wear a sweater");
//     } else {
//         console.log("Wear t-shirt");
//     }
// }
// whatShallIWear(50);
// whatShallIWear(80);
// whatShallIWear(60);

// 8  А что будет на выходе?

function doIt(param) {
    param = 2;
}
var test = 1;
doIt(test);
console.log(test);

// 9
