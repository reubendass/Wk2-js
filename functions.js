// // const pressGrindBeans = () => {
// //     console.log("Grinding for 20 seconds")
// // };

// // pressGrindBeans ();

// let colour = 'blue'

// const favColour = () => {
//     console.log(`My favourite colour is ${colour}`)
//   };

//   favColour(colour);



// // Activity 1 

//   function factorial (n) {
//     if ((n === 0) || (n === 1 ))
//         return 1;
//     else
//     return 
//   }

// Activity 2


// Activity 3
// Simulated user's PIN and balance
const userPIN = 1234;
let userBalance = 1000;

// Function to withdraw cash
function withdrawCash(pin, amount) {
    if (pin === userPIN) {
        if (amount <= userBalance) {
            userBalance -= amount;
            console.log(`Cash dispensed: $${amount}`);
            console.log(`Remaining balance: $${userBalance}`);
        } else {
            console.log("Insufficient funds.");
        }
    } else {
        console.log("Incorrect PIN.");
    }
}

// Example usage:
const enteredPIN = 1234; // Replace with the user's entered PIN
const withdrawalAmount = 200; // Replace with the desired withdrawal amount

withdrawCash(enteredPIN, withdrawalAmount);
