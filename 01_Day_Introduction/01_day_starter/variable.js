// Declaring different variables of different data types

// Scope: Block-scoped ({ }).

// Re-declaration: Not allowed in the same block.

// Hoisting: Hoisted but not initialized (Temporal Dead Zone until declared).

// Use case: When you need a variable that may change values.

let firstName = 'Asabeneh'    // first name of a person
let lastName = 'Yetayeh'      // last name of a person
let country = 'Finland'       // country
let city = 'Helsinki'         // capital city
let age = 100                 // age in years
let isMarried = true

// Declaring variables with number values

// Scope: Block-scoped ({ }).

// Re-declaration: Not allowed in the same block.

// Reassignment: ❌ Not allowed (constant value).

// Hoisting: Hoisted but not initialized (Temporal Dead Zone).

// Use case: When the value should never change (constants, fixed references).

const gravity = 9.81         // earth gravity  in m/s2
const boilingPoint = 100     // water boiling point, temperature in oC
const PI = 3.14              // geometrical constant

// Variables can also be declaring in one line separated by comma

let name = 'Asabeneh',     //name of a person
  job = 'teacher',
  live = 'Finland'


// Scope: Function-scoped (available inside the function where declared).

// Re-declaration: Allowed within the same scope.

// Hoisting: Variables declared with var are hoisted and initialized as undefined.

// Use case: Rarely used in modern JavaScript (considered outdated).

var name = "Prasath";
var name = "B";  // re-declaration allowed
console.log(name); // "B"
