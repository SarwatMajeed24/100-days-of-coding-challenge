"use strict";
// Question # 37:
// Large Shirt:
function make_shirt(size = "large", text = "I love TypeScript") {
    console.log(`Size of the T-Shirt is: ${size} \nMessage is: ${text}`);
}
make_shirt();
make_shirt("medium");
make_shirt("small", "I love HTML");
// Question # 38:
// Cities:
function describe_cities(city, country = "Pakistan") {
    console.log(`My favorite city is ${city}, is in ${country}`);
}
describe_cities("Karachi");
describe_cities("Islamabad");
describe_cities("London", "UK");
// Question # 39:
// City Names:
function city_country(city, country) {
    return `${city}, ${country}`;
}
console.log(city_country("Karachi", "Pakistan"));
console.log(city_country("Paris", "France"));
console.log(city_country("London", "Uk"));
