"use strict";
// Question # 16
// More Guests:
let guestList = ['Ananya', 'Eshal', 'Sameer', 'Uzair', 'Hadi', 'Miral'];
console.log("Wow! now I have bigger dinner table");
guestList.unshift('Maira'); // unshift use for add name at the beginning.
guestList.splice(4, 0, 'Ebad'); // splice use for add name in the middle.
guestList.push('yumna'); // push use for add name at the end.
let msg1 = "\nYou are cordially invited for dinner party at my home on 15th March'2024 at 8:00pm.";
let msg2 = "\nawaiting to Welcome";
let msg3 = "\nMs.Sarwat Majeed and all family members\n";
for (let i = 0; i < guestList.length; i++) {
    console.log(`${guestList[i]} ${msg1} ${msg2} ${msg3}`);
}
// Question # 17
// Shirink Guest List:
console.log("Unfortunately no space for new guest, only two space");
while (guestList.length > 2) { // while loop and pop method use for remove the name from list
    let remove_guest = guestList.pop();
    console.log(`"sorry!! ${remove_guest} you are not invited for dinner.`);
}
let msg4 = "\nYou are still invited for dinner party at my home on 15th March'2024 at 8:00pm.";
let msg5 = "\nawaiting to Welcome";
let msg6 = "\nMs.Sarwat Majeed and all family members\n";
for (let i = 0; i < guestList.length; i++) {
    console.log(`${guestList[i]} ${msg4} ${msg5} ${msg6}`);
}
guestList.splice(0, 2); // Splice use for empty lis
console.log(guestList);
// Question # 18
// Seeing the world:
let worldPlaces = ['England', 'Swizerland', 'Singapore', 'France', 'Paris'];
console.log("Original Order: " + worldPlaces + " ,I like to visit them");
//Print array in Alphabetical Order:
console.log("Aphabetical Order: " + [...worldPlaces].sort() + " ,I like to visit them");
//Show That your array in its original order
console.log("Original Order : " + worldPlaces + " ,I like to visit them");
//Print array in Reversed Order:
console.log("Reversed Order: " + [...worldPlaces].sort().reverse() + " ,I like to visit them");
//Show That your array still in its original order
console.log("Original Order : " + worldPlaces + " ,I like to visit them");
//Print array again in Reversed Order:
worldPlaces.reverse();
console.log("Reversed Order: ", worldPlaces + " ,I like to visit them");
//Print array again in original Order:
worldPlaces.reverse();
console.log("Original Order: ", worldPlaces + " ,I like to visit them");
//Print array again in Alphabetical Order:
worldPlaces.sort();
console.log("Alphabetical Order: ", worldPlaces + " ,I like to visit them");
//Print array again in Reversed Alphabetical Order:
worldPlaces.reverse();
console.log("Reversed Alphabetical Order: ", worldPlaces + " ,I like to visit them");
