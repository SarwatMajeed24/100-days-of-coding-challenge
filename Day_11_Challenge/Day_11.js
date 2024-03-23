"use strict";
// Question # 31:
// No Users:
let usersName = ["Uzair", "Fatima", "Mahrosh"];
usersName = [];
if (usersName.length === 0) {
    console.log("All users have been removed: " + usersName.length + "\nwe need to find some users!");
}
else {
    console.log("Hello User" + usersName);
}
// Question # 32:
// Checking Usernames:
let current_usernames = ["MaHaD", "SaaD", "MaHaM", "HiNa", "WaNIYa"];
let new_users = ["ArSaL", "SaaD", "MaHeeN", "AROUSH", "WaNIYa"];
for (let newUsers of new_users) {
    let upperCase = newUsers.toUpperCase();
    if (current_usernames.some(currentusernames => currentusernames.toUpperCase() === upperCase)) {
        console.log(`"the person, ${upperCase} will need to enter a new username name:"`);
    }
    else {
        console.log(`"${upperCase}," is available`);
    }
}
// Question # 33:
// Ordinal Numbers:
let ordinalNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let num of ordinalNumbers) {
    let suffix;
    if (num === 1) {
        suffix = "st";
    }
    else if (num === 2) {
        suffix = "nd";
    }
    else if (num === 3) {
        suffix = "rd";
    }
    else {
        suffix = "th";
    }
    console.log(`${num}${suffix}`);
}
// print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
