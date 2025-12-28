const taxRate = 0.18;
taxRate = 0.20; // ❌ TypeError: Assignment to constant variable.

const user = { name: "Alice" };
user.name = "Bob"; // ✅ Allowed! (We changed the data inside, not the variable binding)
console.log(user.name); // "Bob"