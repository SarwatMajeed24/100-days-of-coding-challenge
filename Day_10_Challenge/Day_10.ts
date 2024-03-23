// Question # 28:
//Stages of Life:

let age: number = 20;

// If the person is less than 2 years old, print a message that the person is a baby.
if (age < 2) {
    console.log("The person is a baby.");
}
// If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
else if (age == 2 && age < 4 ) {
    console.log("The person is a toddler.");
}
// If the person is at least 4 years old but less than 13, print a message that the person is a kid.
else if (age == 4 && age < 13 ) {
    console.log("The person is a kid.");
}
//If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
else if (age == 13 && age < 20 ) {
    console.log("The person is a teenager.");
}

// If the person is at least 20 years old but less than 65, print a message that the person is an adult.
else if (age == 20 && age < 65 ) {
    console.log("The person is a adult.");
}

// If the person is age 65 or older, print a message that the person is an elder
else if (age == 65 && age < 65 ) {
 console.log("The person is a toddler.");
}

// Question # 29:
// Favorite Fruit:
let favorite_fruits: string[] = ["Mango", "Pineapple", "Grapes"];

if (favorite_fruits.includes("Mango")) {
    console.log("I really like Mango!");
}
if (favorite_fruits.includes("Pineapple")) {
    console.log("I really like Pineapple!");
}
if (favorite_fruits.includes("Grapes")) {
    console.log("I really like Grapes!");
}  
if (favorite_fruits.includes("Orange")) {
    console.log("I really like Orange!");
}  
if (favorite_fruits.includes("Apple")) {
    console.log("I really like Apple!");
}  

// Question # 30:
// Hello Admin:

let login: string[] = ["admin!", "Faris!", "Arsal!", "Miral!", "Yumna!"];
for (let logins of login){
if (logins === "admin!"){
    console.log("Hello admin! would you like to see status report?");
}

else{ 

    console.log(`Hello ${logins} thanks for login.`);
}
}
let username: string[] = ["admin!", "Faris!", "Arsal!", "Miral!", "Yumna!"];
for (let i=0; i<username.length; i++) {

if (username[i] === "admin!")
{
    console.log("Hello admin! would you like to see status report?");
}
else {
    console.log(`Hello ${username[i]} thanks for login.`);
}
}




