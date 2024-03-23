"use strict";
// Question # 13:
// Make your own Array:
let favorite_transportation = ['civics', 'Mercedes', 'Corolla', 'Pajero', 'BMW \n'];
let message = "I like to drive:";
for (let i = 0; i < favorite_transportation.length; i++) {
    console.log(`${message} ${favorite_transportation[i]}`);
}
// Question # 14:
// Guest List:
let guestlist = ["Mr & Mrs Salman,", "Mr & Mrs Waqas,", "Mr & Mrs Faisal,"];
let msg1 = "\nYou are cordially, invite for dinner party at my home on 15th March'2024 at 8:00pm.";
let msg2 = "\nawaiting to Welcome";
let msg3 = "\nMs.Sarwat majeed and all family members\n";
for (let i = 0; i < guestlist.length; i++) {
    console.log(`${guestlist[i]} ${msg1} ${msg2} ${msg3}`);
}
// Question # 15:
// Changing Guest List:
let guest_not_coming = "Mr & Mrs Faisal";
let new_guest = "Mr & Mrs Uzair,";
guestlist[2] = new_guest;
for (let i = 0; i < guestlist.length; i++) {
    console.log(`${guestlist[i]} ${msg1} ${msg2} ${msg3}`);
}
console.log(`${guest_not_coming} are not coming for dinner party.`);
