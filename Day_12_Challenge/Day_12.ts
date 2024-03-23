// Question # 34:
// Pizzas:

let myPizzas: string[] = ["Fajita", "BBQ Tikka", "Supreemo"]
for (let My_Favorite of myPizzas){
    console.log("My Favriote Pizza is:" , My_Favorite);
}
console.log("I really love to eat Pizza!");

// Question # 35:
// Animals:
let animals: string[] = ["cat", "dog", "rabbit"]
for (let animal of animals){
    console.log(`A ${animal} would make a great pet.`);
}
console.log("Any of these animals would make a great pet");

// Question # 36:
// T-Shirt

function make_shirt(size: string, text: string)
{
    console.log(`Size of T-Shirt is: ${size} \nHow is it? ${text} \nThnak you!`); 

}
make_shirt("large", "\nWow! is a beautiful Shirt")
