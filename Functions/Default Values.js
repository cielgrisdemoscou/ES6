/*
function sayHi(aName){
	return "Hello" + (aName || "anon");
}


function sayHi(aName = "anon"){
	return "Hello" + aName;
}

console.log(sayHi("Ted"));

*/

const sayHi = (aName = "anon") => "hello" + aName;

