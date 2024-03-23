"use strict";
// Question # 43:
// UnChanged Magicians:
let new_magicians = ["Harry Potter", "Harmani", "Dumbledore"];
function copy_Array(array) {
    return [...array];
}
function make_great(name2) {
    for (let i = 0; i < name2.length; i++) {
        name2[i] = name2[i] + " is a great magician ";
    }
}
function show_magicians(name) {
    for (let magician of name) {
        console.log(magician);
    }
}
let unchanged_magicians = copy_Array(new_magicians);
make_great(unchanged_magicians);
console.log("\nThis is my original array:");
show_magicians(new_magicians);
console.log("\nThis is my modified array:");
show_magicians(unchanged_magicians);
// Question # 44:
// Sandwiches:
function make_sandwich(...items) {
    console.log(`"Making sandwich with:" ${items.join(',')}`);
}
make_sandwich("Ketchup", "Mayo", "PeanutButter");
make_sandwich("Chicken piece", "Lettuce");
make_sandwich("Tomato", "Cucumber");
