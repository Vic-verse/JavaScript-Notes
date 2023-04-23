/*
---------------------------------------
   Var -> Global Variable,
   Let -> Local Variable,
   Const -> Constant Variable 
---------------------------------------
*/

//String Class:

let word = "Excalibur";
let sentence = "In the end, we will know about String";

let log = console.log();

//Checking the index of 'e' 
log(word.indexOf("e"));
// output: 0

//Convert into lowercase and search "e"
log(word.toLowerCase().indexOf("e"));
// output: 0

//Checking the last index of "w":
log(sentence.lastIndexOf("w"));
// output: 23

//Checking the index of "know" from "we"
log(sentence.indexOf("know", sentence.indexOf("we")));
// output: 

log(sentence.indexOf("know", sentence.indexOf("we") + 3));
// output: 