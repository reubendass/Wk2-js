// // dotNotation

// // Activity 

// console.log("   |   |    ")
// console.log("   |   |    ")
// console.log("   |   |    ")
// console.log("------------")
// console.log("   |   |    ")
// console.log("   |   |    ")
// console.log("   |   |    ")
// console.log("------------")
// console.log("   |   |    ")
// console.log("   |   |    ")
// console.log("   |   |    ")





// // variablesOperators

// // Activity 1

// let myName = 'Reuben'
// let myAge = '25'
// let favColour = 'Teal'

// console.log (`Hello my name is ${myName}, I am ${myAge} years old
//  and my favourite colour is ${favColour}.`)


// // Activity 2

// const meals = {
//   breakfast: "Cereal",
//   lunch: "Sandwich",
//   dinner: "Pasta"
// };

// console.log("Breakfast:", meals.breakfast);
// console.log("Lunch:", meals.lunch);
// console.log("Dinner:", meals.dinner);

// //  Activity 3 

// // Struggled with this one

// // Activity 4

// const space1 = 'x';
// const space2 = 'o';
// const space3 = 'x';
// const space4 = 'o';
// const space5 = 'x';
// const space6 = 'o';
// const space7 = 'x';
// const space8 = 'o';
// const space9 = 'x';

// console.log(`
//   ${space1} | ${space2} | ${space3}
//   ---------
//   ${space4} | ${space5} | ${space6}
//   ---------
//   ${space7} | ${space8} | ${space9}
// `);





// // ifElse
 
// // activity 1

// let age = 25; 

// if (age > 17) {
//     console.log("Yes, I can serve you");
// } else {
//     console.log("You aren't old enough");
// }

// // activity 2

// // let pizzaTopping = "Eggs"; 

// switch (pizzaTopping) {
//     case "Pepperoni":
//     case "Cheese":
//     case "Tomato Sauce":
//         console.log("These are my favourite pizza toppings");
//         break;

//     case "Peppers":
//         console.log(`I don't mind having ${pizzaTopping} on my pizza`);
//         break;
        
//     default: 
//         console.log(`${pizzaTopping} doesn't belong on pizza!!!!`)    
// }


// // activity 3

// let password = "ilovecode123"

// if (password.length < 8) {
// console.log("Password is too short");
// }
// else {
//     console.log(`Password is, ${password}`);
// }



// // activity 4 

// let num = 15;

// if (num % 3 === 0 && num % 5 === 0) {
//     console.log("Fizz Buzz");
// } else if (num % 3 === 0) {
//     console.log("Fizz");
// } else if (num % 5 === 0) {
//     console.log("Buzz");
// } else {
//     console.log(num);
// }


// // activity 5 

// // This was completed in session 

// let num = "1271";
// let stringStatus = "is";

// for ( let i = 0; i < num.length / 2; i++){
//     if ( num[i] != num[num.length - 1 - i] ){        
//         stringStatus = "not"
//         break;
//     };
// };

// if (stringStatus == "not"){
//     console.log("It is not a palindrome");
// } else {
//     console.log("Is a palindrome.");
// };

// // activity 6

// let time = 8; // Replace with the actual time
// let placeOfWork = "Office";
// let townOfHome = "Home";

// if (time === 7) {
//     console.log(`At ${time}, I'm at ${townOfHome}.`);
// } else if (time === 8) {
//     console.log(`At ${time}, I'm commuting to ${placeOfWork}.`);
// } else if (time === 9) {
//     console.log(`At ${time}, I'm at ${placeOfWork}.`);
// } else {
//     console.log(`At ${time}, I'm somewhere else.`);
// }

// //// activity 7 

// // let inputString = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuh gtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";


// // const vowels = ['a', 'e', 'i', 'o', 'u'];

// // console.log("Index of the last vowel:", lastIndex);

// // Struggled with this one 

// //// activity 8 

// // let word = "hello"

// // Struggled with this one 

// // activity 9

// let num1 = 7; 
// let num2 = 4; 

// let sum = num1 + num2;

// if (sum % 2 === 0) {
//     console.log(sum);
// } else {
//     console.log(num1 * num2);
// }





// // arraysLoops

// // activity 1

// let favoriteFilms = ["Chicken Run", "Cars", "Hancock", "Inception", "The Dark Knight"];

// favoriteFilms.push("Benjamin Button", "Iron Man");

// console.log("My Favorite Films:");

// for (let i = 0; i < favoriteFilms.length; i++) {
//     console.log(`${i + 1}. ${favoriteFilms[i]}`);
// }



// // activity 2 

// console.log(`Numbers in the 2 times table: ${multiplesTwo}`);


// // Generate and log 6 random numbers between 1 and 50
// for (let i = 0; i < 6; i++) {
//     const randomNumber = Math.floor(Math.random() * 50) + 1;
//     console.log(randomNumber);
//   }

// // Activity 3

// console.log("Counting from 9 to 0:");

// for (let i = 9; i >= 0; i--) {
//     console.log(i);
// }

// // Activity 4

// let films = ["Cars", "Iam Legend", "Ghostbusters", "The Dark Knight"];

// console.log("List of Films:");

// for (let i = 0; i < films.length; i++) {
//     console.log(films[i]);
// }
// if (films[2] === "Ghostbusters") {
//     console.log("Yay, it's Ghostbusters!");
// } else {
//     console.log("Boo! We want Ghostbusters.");
// }

// // Activity 5

// console.log("Random Numbers and Divisibility Check:");

// for (let i = 0; i < 6; i++) {
//     let randomNumber = Math.floor(Math.random() * 30) + 1;
    
//     if (randomNumber % 7 === 0) {
//         console.log(`${randomNumber} is divisible by 7.`);
//     } else {
//         console.log(`${randomNumber} is not divisible by 7.`);
//     }
// }


// // Activity 6

// // Struggled with this one





// // functions

// // Activity 1 

//   function factorial (n) {
//     if ((n === 0) || (n === 1 )) {
//         return 1;
//     } else {
//         return (n *factorial(n-1));
//     }
    
//   }

//   console.log(factoral(33));

//   const factorial = (n) => (n === 0 || n === 1) ? 1 : (n * factorial(n - 1));

// console.log(factorial(33));


// // Activity 2


// // Activity 3

// const userPIN = 1234;
// let userBalance = 1000;

// function withdrawCash(pin, amount) {
//     const correctPin = 1234;
//     let userBalance = 1000; 
    
//     if (pin !== correctPin) {
//         return console.log("Incorrect PIN.");
//     }

//     if (amount > userBalance) {
//         return console.log("Insufficient funds.");
//     }

//     userBalance -= amount;
//     console.log(`Cash dispensed: $${amount}`);
//     console.log(`Remaining balance: $${userBalance}`);
// }

// const enteredPIN = 1234;
// const withdrawalAmount = 200;

// withdrawCash(enteredPIN, withdrawalAmount);




// // objects

// // Activity 1

// let person = {
//     name: "Reuben",
//     age: 25,
//     favSongs: ["50 Cent - If I Can't", "Kanye West - Highlights", "Chris Brown - Monalisa"],
    
//     sayHi: () => `Hello my name is ${person.name}`
//   };
  
//   console.log(person.favSongs);
//   console.log(person["favSongs"]);   
//   console.log(person.sayHi());
  
  
//   // Activity 2
  
//   let pet = {
//     name: "Garfield",
//     typeOfPet: "Cat",
//     age: 5,
//     color: "Ginger",
  
//     eat: () => `${pet.name} is eating.`,
  
//     drink: () => {
//         return `${pet.name} is drinking.`;
//     }
//   };
  
//   console.log(pet.eat());
  
  
//   // Activity 3 
  
//   // Struggled 
