// Question # 40:
// Album: 

function make_album(artist: String,title: string, tracks?: number)
{
const album: {artist: String,title: string,tracks?: number} = {
    artist: artist,
    title: title,
}

if (tracks !== undefined){
    album.tracks = tracks;
}
return album;
}
console.log(make_album('Atif Aslam', 'Doorie'));
console.log(make_album('Ali Zafar', 'Mushk'));
console.log(make_album('Asim Azhar', 'Habibi' , 5));

//Question # 41:
let magicians: string[] = ["Peter", "David" , "Alice"];
function show_magicians(name: string[]) {
    for(let magician of name){
    console.log(magician);
    }
} 
show_magicians(magicians);

// Question # 42:
// Great Magicians

let new_magicians: string[] = ["Harry Potter", "Harmani" , "Dumbledore"];
function make_great(name2: string[]) {
    for(let i=0; i<name2.length; i++){
        new_magicians[i] = name2[i] + " is a great magician " 
    }
} 
function arraymagicians(name: string[]) {
    for(let magician of name){
    console.log(magician);
    }
} 
make_great(new_magicians);
arraymagicians(new_magicians);
