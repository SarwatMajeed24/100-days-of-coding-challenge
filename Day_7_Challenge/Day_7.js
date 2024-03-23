"use strict";
// Question # 19
// Dinner Guests
let guestList = ['Ananya', 'Eshal', 'Sameer', 'Uzair', 'Hadi', 'Miral'];
console.log(`I am finally invited "${guestList.length}" guests for dinner party.`);
// Question # 20
// Store in Array (1st method for print ) (print in array)
let bestNovels = ['Robinson crusoe', 'The Black Sheep', 'Harry Potter', 'Emma', 'The Woman in White'];
console.log("The five greatest novel of the world:", bestNovels);
// Store in Array (2nd method for print) (print outside the array)
let bestNovels2 = ['Robinson crusoe', 'The Black Sheep', 'Harry Potter', 'Emma', 'The Woman in White'];
console.log("The five greatest novel of the world:");
for (let famous of bestNovels2) {
    console.log(famous);
}
let markSheet = {
    name: "Muhammad Waqas",
    maximumMarks: 150,
    marks_obtained: 98,
    percentage: 65.3,
    grades: "B",
    Passed: true,
};
//Method 1 for print
console.log(markSheet);
//Method 2 for print
console.log(`Student Name: ${markSheet.name}, \n M.M: ${markSheet.maximumMarks}, \n M.Obt: ${markSheet.marks_obtained}, \n Per: ${markSheet.percentage}, \n Grade: ${markSheet.grades}, \n staus: ${markSheet.Passed}`);
