// let coffeeOrder = [ 
//     "Reuben - Espresso",
//     "Dave - Matcha",
//     "John - Cortado " ]

// console.log(coffeeOrder);

// coffeeOrder[1] = "Ann - Latte";

// console.log(coffeeOrder);


// let coffeeOrder = [ 
//     "Reuben - Espresso",
//     "Dave - Matcha",
//     "John - Cortado " ]

// coffeeOrder.push("Donna - Espressso");
// console.log(coffeeOrder);

// coffeeOrder.pop();
// console.log(coffeeOrder);


// let faveSongs = [ 
//     "Chris Brown - Kiss",
//     "Michael Jackson - You Rock my World",
//     "50 Cent - If I Can't" 
// ]

// console.log(faveSongs);

// faveSongs.push("Chris Brown - Yeah 3x ");
// faveSongs.push("Michael Jackson - Hold my Hand ");
// console.log(faveSongs);


// let multiplesTwo = [];

// for (let i = 0; i < 20; i++) {
    
//     if (i % 2 == 0){
//         multiplesTwo.push(i);
//     };

// };


// activity 1


// let favoriteFilms = ["Chicken Run", "Cars", "Hancock", "Inception", "The Dark Knight"];

// favoriteFilms.push("Benjamin Button", "Iron Man");

// console.log("My Favorite Films:");

// for (let i = 0; i < favoriteFilms.length; i++) {
//     console.log(`${i + 1}. ${favoriteFilms[i]}`);
// }



// activity 2 

// console.log(`Numbers in the 2 times table: ${multiplesTwo}`);


// // Generate and log 6 random numbers between 1 and 50
// for (let i = 0; i < 6; i++) {
//     const randomNumber = Math.floor(Math.random() * 50) + 1;
//     console.log(randomNumber);
//   }

// Activity 3

console.log("Counting from 9 to 0:");

for (let i = 9; i >= 0; i--) {
    console.log(i);
}

// Activity 4

let films = ["Cars", "Iam Legend", "Ghostbusters", "The Dark Knight"];

console.log("List of Films:");

for (let i = 0; i < films.length; i++) {
    console.log(films[i]);
}
if (films[2] === "Ghostbusters") {
    console.log("Yay, it's Ghostbusters!");
} else {
    console.log("Boo! We want Ghostbusters.");
}

// Activity 5

console.log("Random Numbers and Divisibility Check:");

for (let i = 0; i < 6; i++) {
    let randomNumber = Math.floor(Math.random() * 30) + 1;
    
    if (randomNumber % 7 === 0) {
        console.log(`${randomNumber} is divisible by 7.`);
    } else {
        console.log(`${randomNumber} is not divisible by 7.`);
    }
}


// Activity 6