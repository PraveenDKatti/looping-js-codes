console.log(myVar); // Output: undefined (Silent failure, confusing bugs)
var myVar = "I am old";

// WITH LET (The "TDZ" Crash)
console.log(myLet); // ❌ ReferenceError: Cannot access 'myLet' before initialization
let myLet = "I am new";
// The code between the start of the block and the line above is the "Dead Zone".


//Autoboxing: Why you can't attach data to a string.
let str = "hello";
str.customProp = 100; // We try to add a property to a primitive string
// JS creates a wrapper object -> adds prop -> destroys object immediately.
console.log(str.customProp); // Output: undefined, The wrapper object that held '100' is already gone.

//Floating Point Math: Why you should never use raw math for financial calculations.
let price = 0.10;
let tax = 0.20;
let total = price + tax;

console.log(total); // Output: 0.30000000000000004
console.log(total === 0.3); // Output: false ❌



//The ?? vs ||: Fixing the "Zero Bug." (Nullish Coalescing)
let userScore = 0; // 0 is a valid score in a game!

// The Bug using || (OR)
// || treats 0 as "false", so it falls back to the default.
let displayScore = userScore || 10;
console.log(displayScore); // Output: 10 (Wrong! User actually scored 0)

// ?? only looks for null or undefined.
let correctScore = userScore ?? 10;
console.log(correctScore); // Output: 0 (Correct!)