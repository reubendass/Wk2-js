
// console.log(person.name)
// console.log(person["name"])

// let offer = "none";
// let time = 1200;

// const cafe = {
//     name: "Whitesheep",
//     seatingCapacity:100,
//     specialOffers: true,
//     drinks: [
//         "Cappuccino",
//         "Latte",
//         "Filter Coffee",
//         "Tea",
//         "Hot Chocolate"
//     ],

//     breakfastOffer: "Free croissant with coffee",
//     lunchOffer:"Free Drink with Sanwich",
//     noOffer: "Sorry! No offer available"

// };

// console.log(cafe.breakfastOffer)


// let day = "Sunday";
// let message = "";

// let alarm = {
//     weekendAlarm: "No alarm needed",
//     weekdayAlarm: "Get up at 7am"
// };

// if (day === "Saturday" || day === "Sunday"){
//     message = alarm.weekendAlarm;
// } else {
//     message = alarm.weekdayAlarm;
// };

// console.log(message);

// Activity 1

let person = {
  name: "Reuben",
  age: 25,
  favSongs: ["50 Cent - If I Can't", "Kanye West - Highlights", "Chris Brown - Monalisa"],
  
  sayHi: () => `Hello my name is ${person.name}`
};

console.log(person.favSongs);
console.log(person["favSongs"]);   
console.log(person.sayHi());


// Activity 2

let pet = {
  name: "Garfield",
  typeOfPet: "Cat",
  age: 5,
  color: "Ginger",

  eat: () => `${pet.name} is eating.`,

  drink: () => {
      return `${pet.name} is drinking.`;
  }
};

// Example usage:
console.log(pet.eat());


// Activity 3 

// Struggled 