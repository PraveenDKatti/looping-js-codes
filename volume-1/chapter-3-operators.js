/* Short Circuiting:
Using logic operators to replace if statements. */

const userIsAdmin = true;
// Traditional If
if (userIsAdmin) {
    console.log("Enter Admin Panel");
}
// Short-Circuit
userIsAdmin && console.log("Enter Admin Panel");

