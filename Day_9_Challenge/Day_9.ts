// Question # 25:
//Alien Colors # 1:

let alien_color: string = "green";                      // Create Variable

if (alien_color === "green") {                         //Use if condition
    console.log("you just earned 5 points for the shooting the alien!");
}

alien_color= "red";                         // if statement failed
if (alien_color === "green") {
    console.log("you just earned 5 points for the shooting the alien!");            // No output
}

// Question # 26:
//Alien Colors # 2:

alien_color = "green";                      // Create Variable

if (alien_color === "green") {                         //Use if condition
    console.log("you just earned 5 points for the shooting the alien!");
}
else {                                               // use else condition
    console.log("you just earned 10 points for the shooting the alien!");
}
if (alien_color === "yellow") {                         //Use if condition
    console.log("you just earned 5 points for the shooting the alien!");
}
else {                                               // use else condition
    console.log("you just earned 10 pointsfor the shooting the alien!");
}
// Question # 27:
//Alien Colors # 3:

//Version Green
alien_color = "green";                      

if (alien_color === "green") {                         
    console.log("you just earned 5 points for the shooting the alien!");
}
else if (alien_color === "yellow") {                                           
    console.log("you just earned 10 points for the shooting the alien!");
}
else if (alien_color === "red"){
    console.log("you just earned 15 points for the shooting the alien!")
}

//Version Yellow
alien_color = "yellow";                      

if (alien_color === "yellow") {                         
    console.log("you just earned 5 points for the shooting the alien!");
}
else if (alien_color === "red") {                                               
    console.log("you just earned 10 points for the shooting the alien!");
}
else if (alien_color === "green"){
    console.log("you just earned 15 points for the shooting the alien!")
}

//Version red
alien_color = "red";                      

if (alien_color === "red") {                         
    console.log("you just earned 5 points for the shooting the alien!");
}
else if (alien_color === "green") {                                               
    console.log("you just earned 10 points for the shooting the alien!");
}
else if (alien_color === "yellow"){
    console.log("you just earned 15 points for the shooting the alien!")
}