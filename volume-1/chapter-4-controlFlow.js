//The Leak in switch, entire switch statement shares one single block scope.
const action = "create";

switch (action) {
    case "create":
        let message = "Created!"; // Declared here
        console.log(message);
        break;
        
    case "delete":
        //let message = "Deleted!"; // ❌ SyntaxError: Identifier 'message' has already been declared
        console.log(message);
        break;
}

switch (action) {
    case "create": { // 👈 Added Braces start a new scope
        let message = "Created!";
        console.log(message);
        break;
    } // 👈 Scope ends
        
    case "delete": { // 👈 New scope, new 'message' variable allowed
        let message = "Deleted!"; 
        console.log(message);
        break;
    }
}