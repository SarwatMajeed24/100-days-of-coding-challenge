"use strict";
// Question # 22
// Intentional Error
let cities = ["Karachi", "Islamabad", "Peshawar", "Quetta"];
console.log(cities[4]); // show undefined error because the length of the array is only 0 till 3
console.log(cities[2]); // correct the error by showing valid index
// Question # 23
// Conditional Tests
// Test 1: (Equality Comparison True)
let colour = "red"; // single = assign the value
console.log("Is color == 'red'? I predict True");
console.log(colour == 'red'); // True      // double == check the value
// Test 2: (Equality Comparison False)
console.log("Is color == 'red'?I predict False");
console.log(colour == 'blue'); // False
// Test 3: (Strict Equality Comparison True)
console.log("Is color === 'red'? I predict True");
console.log(colour === 'red'); // True                // triple === check the value with data type
// Test 4: (Strict Equality Comparison False)
console.log("Is color === 'blue'? I predict False");
console.log(colour === 'blue'); // false              // triple === check the value with data type
// Test 5: (Inequality Comparison True)
console.log("Is color != 'blue'?I predict True");
console.log(colour != 'blue'); // True                // != means not equal to 
// Test 6: (Inequality Comparison False)
console.log("Is color != 'red'?I predict False");
console.log(colour != 'red'); // False             // != means not equal to 
// Test 7: (Strict Inequality Comparison True)
console.log("Is color !== 'blue'?I predict True");
console.log(colour !== 'blue'); // True            // !== means not equal to
// Test 8: (Strict Inequality Comparison False)
console.log("Is color !== 'red'?I predict False");
console.log(colour !== 'red'); // False           // !== means not equal to
// Test 9: (UpperCase Function True)
console.log("Is color.Upper Case == 'red'?I predict True");
console.log(colour.toUpperCase() == 'RED'); // True           // change first in uppercase than check equality
// Test 10: (LowerCase Function True)
console.log("Is color.Lower Case == 'red'?I predict True");
console.log(colour.toLowerCase() == 'RED'); // True           // change first in uppercase than check equality
// Test 9: (checking Truthiness True)
console.log("Is color? I predict True");
console.log(colour == 'red'); // True                     // equal to
// Test 10: (checking Falseness True)
console.log("Is color?I predict False");
console.log(!colour); // False                  // not equal to 
// Question # 24
// More Conditional Tests
let Nationality = "Pakistani";
let numeric = 20;
let color = ["Red", "Yellow", "Blue"];
// Equality Test
console.log("Equality test with string: ", Nationality === "Pakistani");
// Inequality Test
console.log("Equality test with string: ", "Pakistani" !== "American");
// Lower Case Function Equality Test:
console.log("Lower test Function Test: ", Nationality.toLowerCase() == "pakistani");
// Lower Case Function Inequality Test:
console.log("Lower test Function Test: ", "PAKISTANI".toLowerCase() !== "Pakistani");
//Numerical Test Involving Equality Test:
console.log("Numerical Tests Involving Equality Test:", numeric === 20);
//Numerical Test Involving Inequality Test:
console.log("Numerical Tests Involving Inequality Test:", 20 != 15);
//Greater Than Test:
console.log("Greater Than Test:", 18 > 12);
//Less Than Test:
console.log("Less Than Test:", 12 < 18);
//Greater Than and Equal to Test
console.log("Greater Than and Equal to Test:", 20 >= 20);
//Less Than and Equal to Test
console.log("Less Than and Equal to Test:", 20 >= 20);
// And Operator using for Test
console.log("And Operator using for Test:", 20 >= 20 && 9 > 8);
// OR Operator using for Test
console.log("And Operator using for Test:", 20 >= 20 || 8 > 8);
// Array Test:
//let color: string[] = ["Red", "Yellow", "Blue"];
console.log("Array Test:", color.includes("Red"));
// Not in a Array Test:
console.log("Not in Array Test:", !color.includes("Green"));
