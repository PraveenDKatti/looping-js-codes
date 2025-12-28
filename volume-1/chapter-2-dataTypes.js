// Primitives (Copy by Value)
let a = 10;
let b = a; // b gets a fresh copy of the number 10
b = 20;
console.log(a); // Output: 10 (a is untouched)

// References (Copy by Address)
let list1 = ["Apple", "Banana"];
let list2 = list1; // list2 points to the SAME array in memory
list2.push("Cherry");

console.log(list1); // Output: ["Apple", "Banana", "Cherry"] (list1 was changed too!)