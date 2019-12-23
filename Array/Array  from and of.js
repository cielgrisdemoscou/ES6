/*
const friends = ["ted", "nano", "hina", "mark"];

const friends = Array.of("ted", "nano", "hina", "mark");

console.log(friends);
*/

const buttons = document.querySelectorAll("button");
const buttons2 = document.getElementsByClassName("btn");

console.log(buttons2);

Array.from(buttons).forEach(button => {
	button.addEventListener("click", () => console.log("i've been clicked"))
})