//variables
var myNumber = 31;
const firstName = 'Katherine';
const lastName = 'Cardona Salazar';
let myBoolean = false;

//Operators
var a1 =  true && true;     // t && t devuelve true
var a2 =  true && false;    // t && f devuelve false
var a3 = false && true;     // f && t devuelve false

var o1 =  true || true;     // t || t devuelve true
var o2 = false || true;     // f || t devuelve true
var o3 =  true || false;    // t || f devuelve true

var n1 = !true;  // !t devuelve false
var n2 = !false; // !f devuelve true
var n3 = !'Cat'; // !t devuelve false

//Conditionals

let compraRealizada = false;
let subsidioAdicional = 0;
if (compraRealizada === true) {
  subsidioAdicional = 10;
} else {
  subsidioAdicional = 5;
}
console.log(subsidioAdicional); 

if (myNumber === 42){
    console.log("Es mi edad");
} else {
    console.log("No es mi edad");
}

myNumber >= 18 ? console.log('adulto') : console.log('menor')